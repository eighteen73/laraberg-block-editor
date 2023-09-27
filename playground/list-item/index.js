import { registerBlockType } from "../../src/index";

import Edit from "./edit";
import Save from "./save";

export default () => {
  registerBlockType("spring/list-item", {
    apiVersion: 3,
    title: "List Item",
    description: "List container for list items",
    category: "text",
    parent: ["spring/list"],
    edit: Edit,
    save: Save,
  });
};
