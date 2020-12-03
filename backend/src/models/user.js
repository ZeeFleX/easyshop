const { Text, Relationship } = require("@keystonejs/fields");

module.exports = {
  name: "User",
  options: {
    schemaDoc: "Пользователи",
    fields: {
      email: { type: Text, schemaDoc: "Логин (email)" },
      password: { type: Text, schemaDoc: "Пароль" },
      shops: { type: Relationship, ref: 'Shop.owner', many: true }
    },
    labelResolver: user => user.email,
  },
};
