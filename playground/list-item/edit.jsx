import * as BlockEditor from "../../src/index";
const { useBlockProps } = BlockEditor.wordpress.blockEditor;

const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  console.log(blockProps);
  return <li {...blockProps}>Hello</li>;
};

export default Edit;
