const { Text, Relationship, Uuid } = require("@keystonejs/fields");

module.exports = {
  name: "Page",
  options: {
    schemaDoc: "Описание страниц проекта",
    fields: {
      pageId: { type: Text, schemaDoc: "Идентификатор страницы" },
      title: { type: Text, schemaDoc: "Title страницы" },
      url: { type: Text, schemaDoc: "URL страницы" },
      contents: { type: Relationship, ref: "Content.pages", many: true },
    },
  },
};
