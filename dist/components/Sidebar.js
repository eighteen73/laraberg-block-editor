import { jsx as _jsx } from "react/jsx-runtime";
import { createSlotFill, Panel } from "@wordpress/components";
const { Slot, Fill } = createSlotFill("StandAloneBlockEditorSidebarInspector");
const Sidebar = () => {
    return (_jsx("div", { className: "block-editor__sidebar", role: "region", children: _jsx(Panel, { header: "Inspector", children: _jsx(Slot, { bubblesVirtually: true }) }) }));
};
Sidebar.Fill = Fill;
export default Sidebar;
//# sourceMappingURL=Sidebar.js.map