import * as BlockEditor from "../../src/index";
const { useBlockProps } = BlockEditor.wordpress.blockEditor;

const Save = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps.save();
  return <li {...blockProps}>Hello</li>;
};

export default Save;
