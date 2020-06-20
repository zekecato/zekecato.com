const SquareConnect = require("square-connect");
const defaultClient = SquareConnect.ApiClient.instance;
const inventory = require("./data/products.json");
const { v4: uuid } = require("uuid");

exports.handler = async (event, context, callback) => {
  // Configure OAuth2 access token for authorization: oauth2
  const oauth2 = defaultClient.authentications["oauth2"];
  oauth2.accessToken = process.env.squareAccessToken;

  const { sku, details } = JSON.parse(event.body);
  const product = inventory.find((p) => p.sku === sku);
  const validDetail = {
    description: details.description.substring(0, 255),
    addShipping: !!details.addShipping,
  };
  if (sku === "TFTCUSTOM") {
    validDetail["amount"] = details.amount > 0 ? details.amount : 0;
    validDetail["quantity"] = 1;
  } else if (sku === "MASK") {
    validDetail["amount"] = details.amount > 0 ? details.amount : 0;
    validDetail["quantity"] = details.quantity > 0 ? details.quantity : 1;
  } else {
    validDetail["amount"] = product.amount;
    validDetail["quantity"] = 1;
  }
  validDetail.quantity = validDetail.quantity.toString();

  const body = new SquareConnect.CreateCheckoutRequest();
  body.idempotency_key = uuid();
  body.redirect_url = `${process.env.URL}/payment-success`;
  body.order = new SquareConnect.CreateOrderRequest();
  body.order.idempotency_key = uuid();
  body.order.order = new SquareConnect.Order();
  const { order } = body.order;

  order.location_id = process.env.squareLocationId;
  order.line_items = [
    {
      quantity: validDetail.quantity,
      name: product.name,
      note: validDetail.description || " ",
      base_price_money: {
        amount: validDetail.amount,
        currency: "USD",
      },
    },
  ];

  if (product.collectAddress) {
    body.ask_for_shipping_address = true;
  }

  if (validDetail.addShipping) {
    const { name, amount, currency } = inventory.find(
      (p) => p.sku === "SHIPPING"
    );

    order.line_items.push({
      name,
      base_price_money: {
        amount,
        currency,
      },
      quantity: "1",
    });
  }

  const apiInstance = new SquareConnect.CheckoutApi();
  let checkout = null;

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
