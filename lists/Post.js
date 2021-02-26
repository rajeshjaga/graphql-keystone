const { Text, Relationship, Select } = require("@keystonejs/fields");

const post = {
  fields: {
    title: {
      type: Text,
      isRequired: true,
    },
    body: {
      type: Text,
      isMutliline: true,
    },
    status: {
      type: Text,
      isRequired: true,
      option: [
        { value: "PUBLISHED", label: "published" },
        { value: "'UNPUBLISHED", label: "unpublished" },
      ],
      defaultValue: "PUBLISHED",
    },
    author: {
      type: Text,
      isRequired: true,
    },
  },
};

module.exports = post;
