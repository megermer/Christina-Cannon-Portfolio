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
      name: "rows",
      label: "Content Rows",
      type: "object",
      list: true,
      ui: {
        itemProps(item) {
          return { label: item?.title || "Row" };
        },
      },
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
          description:
            "An optional title for this content-row, to make it easier to edit",
        },
        {
          type: "rich-text",
          label: "Block",
          name: "block",
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
