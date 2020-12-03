const { Text, Relationship, DateTime } = require("@keystonejs/fields");
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

const Page = require("./page");

module.exports = {
  name: "Content",
  options: {
    schemaDoc: "Текстовое содержание страниц",
    fields: {
      blockId: { type: Text, schemaDoc: "Идентификатор блока" },
      blockContent: { type: Wysiwyg, schemaDoc: "Содержание блока" },
      pages: { type: Relationship, ref: "Page.contents", many: true },
      createdAt: { type: DateTime, schemaDoc: "Дата и время публикации"}
    },
  },
};
