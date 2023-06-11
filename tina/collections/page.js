export default {
  label: "Page Content",
  name: "page",
  path: "content/page",
  format: "json",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      name: "body",
      label: "Content Rows",
      type: "object",
      list: true,
      fields: [
        {
          type: "rich-text",
          label: "Body",
          name: "body",
        },
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      return undefined;
    },
  },
};
