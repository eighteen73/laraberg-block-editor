import { registerBlockType } from "../../src/index";

import Edit from "./edit";
import Save from "./save";

export default () => {
  registerBlockType("spring/list", {
    apiVersion: 3,
    title: "List",
    description: "List container for list items",
    category: "text",
    edit: Edit,
    save: Save,
  });
};
