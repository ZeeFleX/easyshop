const { Text, Relationship, DateTime } = require("@keystonejs/fields");

module.exports = {
  name: "Category",
  options: {
    schemaDoc: "Категории продуктов",
    fields: {
      name: { type: Text, schemaDoc: "Наименование категории" },
      parents: { type: Relationship, ref: "Category.children", many: true },
      children: { type: Relationship, ref: "Category.parents", many: true },
      shop: { type: Relationship, ref: "Shop.categories" }
    },
  },
};
