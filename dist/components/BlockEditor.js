import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "@wordpress/element";
import { BlockEditorProvider, BlockInspector, BlockList, BlockTools, Inserter, ObserveTyping, WritingFlow, BlockEditorKeyboardShortcuts, } from "@wordpress/block-editor";
import { ToolbarButton, Popover, ToolbarItem, } from "@wordpress/components";
import { undo as undoIcon, redo as redoIcon } from "@wordpress/icons";
import Header from "./Header";
import Sidebar from "./Sidebar";
import InserterToggle from "./InserterToggle";
import Notices from "./Notices";
import BlockNavigationDropdown from "./BlockNavigationDropdown";
import "@wordpress/format-library";
import TextEditor from "./TextEditor";
const BlockEditor = ({ settings, onChange, blocks, undo, redo, canUndo, canRedo, editorMode, isInserterOpen, setIsInserterOpened, }) => {
    const inputTimeout = useRef(null);
    const handleInput = (blocks) => {
        if (inputTimeout.current) {
            clearTimeout(inputTimeout.current);
        }
        inputTimeout.current = setTimeout(() => {
            onChange(blocks);
        }, 500);
    };
    const handleChange = (blocks) => {
        if (inputTimeout.current) {
            clearTimeout(inputTimeout.current);
        }
        onChange(blocks);
    };
    return (_jsx("div", { className: "block-editor__editor wp-embed-responsive", children: _jsxs(BlockEditorProvider, { value: blocks, onInput: handleInput, onChange: handleChange, settings: settings, children: [_jsx(Notices, {}), _jsxs(Header.Fill, { children: [_jsx(Inserter, { renderToggle: (props) => (_jsx(InserterToggle, Object.assign({}, props, { editorMode: editorMode }))) }), _jsx(ToolbarButton, { icon: undoIcon, onClick: undo, disabled: !canUndo || editorMode === "text", className: "history-button" }), _jsx(ToolbarButton, { icon: redoIcon, onClick: redo, disabled: !canRedo || editorMode === "text", className: "history-button" }), _jsx(ToolbarItem, { as: BlockNavigationDropdown, isDisabled: editorMode === "text" })] }), _jsx(Sidebar.Fill, { children: _jsx(BlockInspector, {}) }), editorMode === "text" && _jsx(TextEditor, {}), editorMode === "visual" && (_jsxs(BlockTools, { children: [_jsx(BlockEditorKeyboardShortcuts.Register, {}), _jsx("div", { className: "editor-styles-wrapper", children: _jsx(WritingFlow, { children: _jsx(ObserveTyping, { children: _jsx(BlockList, {}) }) }) })] })), _jsx(Popover.Slot, {})] }) }));
};
export default BlockEditor;
//# sourceMappingURL=BlockEditor.js.map