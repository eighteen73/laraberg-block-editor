import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, createRoot, unmountComponentAtNode, } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";
import { SlotFillProvider } from "@wordpress/components";
import { parse, serialize } from "@wordpress/blocks";
import { ShortcutProvider } from "@wordpress/keyboard-shortcuts";
import { doAction, applyFilters } from "@wordpress/hooks";
import "../store";
import { registerBlocks } from "../lib/blocks";
import BlockEditor from "./BlockEditor";
import Header from "./Header";
import Sidebar from "./Sidebar";
import BindInput from "../lib/bind-input";
import { select, dispatch, useSelect, useDispatch } from "@wordpress/data";
import defaultSettings from "../lib/default-settings";
import KeyboardShortcuts from "./KeyboardShortcuts";
const Editor = ({ settings, onChange, input, value }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { setBlocks, undo, redo, setEditorMode, setIsInserterOpened } = useDispatch("laraberg-editor");
    const { blocks, canUndo, canRedo, getEditorMode, isInserterOpen } = useSelect((select) => {
        return {
            blocks: select("laraberg-editor").getBlocks(),
            canUndo: select("laraberg-editor").canUndo(),
            canRedo: select("laraberg-editor").canRedo(),
            getEditorMode: select("laraberg-editor").getEditorMode(),
            isInserterOpen: select("laraberg-editor").isInserterOpened(),
        };
    });
    useEffect(() => {
        var _a;
        registerBlocks(settings.disabledCoreBlocks);
        (_a = input === null || input === void 0 ? void 0 : input.form) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", preventSubmit);
        if (settings.fetchHandler) {
            apiFetch.setFetchHandler(settings.fetchHandler);
        }
        /**
         * Cleanup
         */
        return () => {
            var _a;
            (_a = input === null || input === void 0 ? void 0 : input.form) === null || _a === void 0 ? void 0 : _a.removeEventListener("submit", preventSubmit);
        };
    }, []);
    useEffect(() => {
        if (value) {
            setBlocks(parse(value));
        }
    }, [value]);
    useEffect(() => {
        onChange(serialize(blocks));
    }, [blocks]);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (_jsx(SlotFillProvider, { children: _jsx(ShortcutProvider, { children: _jsxs("div", { className: "block-editor", children: [_jsx(KeyboardShortcuts.Register, {}), _jsx(KeyboardShortcuts, {}), _jsx(Header, { toggleSidebar: toggleSidebar, sidebarOpen: sidebarOpen, editorMode: getEditorMode, setEditorMode: setEditorMode }), _jsxs("div", { className: "block-editor__content", style: { height: settings.height }, children: [_jsx(BlockEditor, { blocks: blocks, onChange: setBlocks, undo: undo, redo: redo, canUndo: canUndo, canRedo: canRedo, settings: settings, editorMode: getEditorMode, isInserterOpen: isInserterOpen, setIsInserterOpened: setIsInserterOpened }), sidebarOpen && getEditorMode !== "text" && _jsx(Sidebar, {})] })] }) }) }));
};
const removeEditor = (element) => {
    var _a;
    dispatch("laraberg-editor").setBlocks([]);
    dispatch("core/blocks").removeBlockTypes(select("core/blocks")
        .getBlockTypes()
        .map((b) => b.name));
    const container = (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector(".block-editor-container");
    if (container) {
        unmountComponentAtNode(container);
        container.remove();
    }
};
const initializeEditor = (element, settings = {}) => {
    const input = new BindInput(element);
    const container = document.createElement("div");
    container.classList.add("block-editor-container");
    input.getElement().insertAdjacentElement("afterend", container);
    input.getElement().style.display = "none";
    doAction("blockEditor.beforeInit", container);
    const root = createRoot(container);
    root.render(_jsx(Editor, { settings: applyFilters("blockEditor.settings", Object.assign(Object.assign({}, defaultSettings), settings)), onChange: input.setValue, value: input.getValue() || undefined, input: input.element }));
    doAction("blockEditor.afterInit", container);
};
const preventSubmit = (event) => {
    var _a;
    if ((_a = event.submitter) === null || _a === void 0 ? void 0 : _a.matches(".block-editor *")) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
    }
};
export { initializeEditor, removeEditor, Editor };
//# sourceMappingURL=Editor.js.map