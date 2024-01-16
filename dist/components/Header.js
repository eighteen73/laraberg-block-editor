import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ToolbarButton, createSlotFill } from "@wordpress/components";
import { drawerRight } from "@wordpress/icons";
import SettingsDropdown from "./SettingsDropdown";
const { Slot, Fill } = createSlotFill("HeaderToolbar");
const Header = ({ toggleSidebar, sidebarOpen, editorMode, setEditorMode, }) => {
    return (_jsxs("div", { className: "block-editor__header", role: "region", children: [_jsx(Slot, { className: "block-editor__header-toolbar", bubblesVirtually: true }), _jsxs("div", { style: { display: "flex" }, children: [_jsx(ToolbarButton, { onClick: toggleSidebar, isPressed: sidebarOpen, icon: drawerRight, label: "Settings", disabled: editorMode === "text" }), _jsx(SettingsDropdown, { editorMode: editorMode, setEditorMode: setEditorMode })] })] }));
};
Header.Fill = Fill;
export default Header;
//# sourceMappingURL=Header.js.map