import * as BlockEditor from "../../src/index";
const { useInnerBlocksProps } = BlockEditor.wordpress.blockEditor;
const { useEffect } = BlockEditor.wordpress.element;
const { useSelect, useDispatch } = BlockEditor.wordpress.data;

const Edit = ({ attributes, setAttributes, clientId }) => {
  const blockType = useSelect((select) => {
    return select("core/block-editor").getSettings();
  }, []);

  useEffect(() => {
    console.log(blockType);
  }, [blockType]);

  useDispatch((dispatch) => {
    dispatch("core/block-editor").insertBlock(
      "core/list-item",
      undefined,
      clientId,
      true
    );
  });

  const innerBlocksProps = useInnerBlocksProps(
    {},
    {
      allowedBlocks: ["spring/list-item"],
      template: [["spring/list-item"]],
    }
  );

  return <ul {...innerBlocksProps}></ul>;
};

export default Edit;
