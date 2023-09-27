import * as BlockEditor from "../../src/index";
const { useInnerBlocksProps } = BlockEditor.wordpress.blockEditor;

const Save = ({ attributes, setAttributes }) => {
  const innerBlocksProps = useInnerBlocksProps.save();
  return <ul {...innerBlocksProps}></ul>;
};

export default Save;
