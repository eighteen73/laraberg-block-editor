var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * WordPress dependencies
 */
import { Button, Dropdown } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";
import { listView } from "@wordpress/icons";
import { store as blockEditorStore } from "@wordpress/block-editor";
import { forwardRef } from "@wordpress/element";
/**
 * Internal dependencies
 */
import ListViewSidebar from "./ListViewSidebar";
function BlockNavigationDropdown(_a, ref) {
    var { isDisabled } = _a, props = __rest(_a, ["isDisabled"]);
    // @ts-ignore
    const hasBlocks = useSelect((select) => !!select(blockEditorStore).getBlockCount(), []);
    const isEnabled = hasBlocks && !isDisabled;
    return (_jsx(Dropdown, { contentClassName: "block-editor-block-navigation__popover", position: "bottom right", renderToggle: ({ isOpen, onToggle }) => (_jsx(Button, Object.assign({}, props, { ref: ref, icon: listView, "aria-expanded": isOpen, "aria-haspopup": "true", onClick: isEnabled ? onToggle : undefined, label: __("List view"), className: "block-editor-block-navigation", "aria-disabled": !isEnabled }))), renderContent: () => _jsx(ListViewSidebar, {}) }));
}
export default forwardRef(BlockNavigationDropdown);
//# sourceMappingURL=BlockNavigationDropdown.js.map