const square = require("./helpers/square-helpers");

exports.handler = async (event, context, callback) => {
  try {
    //get a location
    const foundLocation = await square.getLocation(
      "Sensitively Simple Online Store"
    );

    //get items for a location
    const items = await square.getItems(foundLocation.id);

    return {
      statusCode: 200,
      body: JSON.stringify({ items }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
