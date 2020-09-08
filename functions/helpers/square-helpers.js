const SquareConnect = require("square-connect");
const defaultClient = SquareConnect.ApiClient.instance;
const oauth2 = defaultClient.authentications["oauth2"];
oauth2.accessToken = process.env.squareAccessToken;

exports.getLocation = async (name) => {
  //get a location by name
  const locationsInstance = new SquareConnect.LocationsApi();
  const { locations } = await locationsInstance.listLocations();
  return locations.find((l) => l.name === name);
};

exports.getItems = async (
  locationId,
  opts = {
    simple: true,
  }
) => {
  const catalogApi = new SquareConnect.CatalogApi();
  const itemsRequest = {
    object_types: ["IMAGE", "ITEM"],
  };
  let { objects } = await catalogApi.searchCatalogObjects(itemsRequest);

  // separate items from images
  let items = objects.filter((object) => {
    return (
      object.type === "ITEM" &&
      object.present_at_location_ids &&
      object.present_at_location_ids.includes(locationId)
    );
  });

  if (!opts.simple) {
    // in this case just attach the image data
    items = items.map((item) => {
      let image = objects.find(
        (object) => object.type === "IMAGE" && object.id === item.image_id
      );
      item.image = image ? image.image_data : null;
      // return mapped item
      return item;
    });
  } else {
    // in the default case simplify item data through mapping
    items = items.map((item) => {
      let {
        id,
        image_id,
        present_at_location_ids,
        item_data: { name, description, category_id, variations },
      } = item;

      let image = objects.find(
        (object) => object.type === "IMAGE" && object.id === image_id
      );

      image = image ? image.image_data : null;

      variations = variations.map((variation) => {
        let {
          id,
          item_variation_data: { name, sku, pricing_type, price_money },
        } = variation;
        // return mapped variation
        return {
          id,
          name,
          sku,
          pricing_type,
          price_money,
        };
      });

      const variation_ids = variations.map((v) => v.id);
      // return mapped item
      return {
        id,
        category_id,
        present_at_location_ids,
        image,
        name,
        description,
        variations,
        variation_ids,
      };
    });
  }

  return items;
};

exports.SquareConnect = SquareConnect;
