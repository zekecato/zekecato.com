const stripe = require("stripe")(process.env.stripeSecretKey);
const inventory = require("./data/products.json");

exports.handler = async (event, context, callback) => {
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

  const sessionParams = {
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    success_url: `${process.env.URL}/payment-success`,
    cancel_url: `${process.env.URL}/tips-for-tips`,
    line_items: [
      {
        name: product.name,
        description: validDetail.description || " ",
        amount: validDetail.amount,
        currency: "USD",
        quantity: validDetail.quantity,
      },
    ],
  };

  if (product.collectAddress) {
    sessionParams["shipping_address_collection"] = {
      allowed_countries: ["US"],
    };
  }

  if (validDetail.addShipping) {
    const { name, amount, currency } = inventory.find(
      (p) => p.sku === "SHIPPING"
    );

    sessionParams.line_items.push({
      name,
      amount,
      currency,
      quantity: 1,
    });
  }

  const session = await stripe.checkout.sessions.create(sessionParams);

  return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id,
      publishableKey: process.env.stripePublishableKey,
    }),
  };
};
