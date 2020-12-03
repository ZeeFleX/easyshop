const { Text, Relationship, DateTime } = require("@keystonejs/fields");

module.exports = {
  name: "Product",
  options: {
    schemaDoc: "Товары",
    fields: {
      name: { type: Text, schemaDoc: "Наименование товара" },
      category: { type: Relationship, ref: "Category", many: true },
      shop: { type: Relationship, ref: "Shop" }
    },
  },
};
