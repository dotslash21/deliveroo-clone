export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name of dish",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      type: "number",
      title: "Price of the dish in INR",
    },
    {
      name: "image",
      title: "Image of the dish",
      type: "image",
    },
  ],
};
