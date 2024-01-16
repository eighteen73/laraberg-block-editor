import { jsx as _jsx } from "react/jsx-runtime";
import { ToolbarButton } from "@wordpress/components";
import { plus as plusIcon } from "@wordpress/icons";
const InserterToggle = ({ onToggle, isOpen, toggleProps, editorMode, }) => {
    return (_jsx(ToolbarButton, Object.assign({ isPrimary: true, isPressed: isOpen, icon: plusIcon, onClick: () => onToggle(!isOpen), label: "Add block", disabled: editorMode === "text" }, toggleProps)));
};
export default InserterToggle;
//# sourceMappingURL=InserterToggle.js.map