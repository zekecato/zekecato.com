const square = require("./helpers/square-helpers");
const { SquareConnect } = square;
const { v4: uuid } = require("uuid");

exports.handler = async (event, context, callback) => {
  //make sure the real items match up with items from our inventory

  let { location_id, line_items } = JSON.parse(event.body);

  const items = await square.getItems(location_id);

  const confirmedItems = line_items.reduce((confirmed, item) => {
    const matchedItem = items.find(
      (i) => i.id === item.id && i.variation_ids.includes(item.variation.id)
    );

    if (matchedItem) {
      confirmed.push({ ...item, ...matchedItem });
    }

    return confirmed;
  }, []);

  if (confirmedItems.length === 0)
    return {
      statusCode: 500,
      body: JSON.stringify({
        e: "Did not find an item from the catalog in the order",
      }),
    };

  const body = new SquareConnect.CreateCheckoutRequest();
  body.idempotency_key = uuid();
  body.redirect_url = `${process.env.URL}/payment-success`;
  body.ask_for_shipping_address = true;
  body.order = new SquareConnect.CreateOrderRequest();
  body.order.idempotency_key = uuid();
  body.order.order = new SquareConnect.Order();
  const { order } = body.order;
  order.line_items = [];

  order.location_id = location_id;

  // initialize item error array
  const line_item_errors = [];

  confirmedItems.map((item) => {
    const orderItem = {
      catalog_object_id: item.variation.id,
      quantity: item.quantity,
    };

    if (item.variation.pricing_type === "VARIABLE_PRICING") {
      orderItem.base_price_money = {
        amount: item.variation.base_price_money,
        currency: "USD",
      };
    }

    order.line_items.push(orderItem);
  });

  order.line_items.push({
    name: "USPS Priority Mail",
    base_price_money: {
      amount: 800,
      currency: "USD",
    },
    quantity: "1",
  });

  const apiInstance = new SquareConnect.CheckoutApi();
  let checkout;

  try {
    checkout = await apiInstance.createCheckout(
      process.env.squareLocationId,
      body
    );
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        e: e.response.text,
      }),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: checkout,
    }),
  };
};
