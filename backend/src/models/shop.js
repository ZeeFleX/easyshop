const { Text, Relationship } = require("@keystonejs/fields");

module.exports = {
  name: "Shop",
  options: {
    schemaDoc: "Магазины",
    fields: {
      name: { type: Text, schemaDoc: "Наименование магазина" },
      owner: { type: Relationship, ref: 'User.shops', schemaDoc: "Владелец" },
      categories: { type: Relationship, ref: 'Category.shop', many: true }
    },
  },
};
