/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import { withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";
import { parse, serialize } from "@wordpress/blocks";

export function PostTextEditor({ blocks, onChange }) {
  const [textareaValue, setTextAreaValue] = useState(blocks);

  const onChangeTextAreaValue = (event) => {
    const fieldContent = event.target.value;
    setTextAreaValue(fieldContent);
    onChange(fieldContent);
  };

  return (
    <>
      <label htmlFor={`post-content`} className="screen-reader-text">
        {__("Type text or HTML")}
      </label>
      <textarea
        autoComplete="off"
        dir="auto"
        value={textareaValue}
        onChange={onChangeTextAreaValue}
        className="editor-post-text-editor"
        placeholder={__("Start writing with text or HTML")}
        style={{ height: "100%", width: "100%" }}
      />
    </>
  );
}

// @ts-ignore
export default compose([
  withSelect((select) => {
    const { getBlocks } = select("laraberg-editor");
    return {
      blocks: serialize(getBlocks()),
    };
  }),
  withDispatch((dispatch) => {
    const { setBlocks } = dispatch("laraberg-editor");
    return {
      onChange(content) {
        const blocks = parse(content);
        setBlocks(blocks);
      },
    };
  }),
])(PostTextEditor);
