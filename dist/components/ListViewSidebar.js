import { jsx as _jsx } from "react/jsx-runtime";
/**
 * WordPress dependencies
 */
import { __experimentalListView as ListView } from "@wordpress/block-editor";
import { useFocusOnMount, useFocusReturn, useMergeRefs, } from "@wordpress/compose";
import { useRef } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
export default function ListViewSidebar() {
    const focusOnMountRef = useFocusOnMount("firstElement");
    const contentFocusReturnRef = useFocusReturn();
    // This ref refers to the sidebar as a whole.
    const sidebarRef = useRef();
    // This ref refers to the list view application area.
    const listViewRef = useRef();
    return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    _jsx("div", { "aria-label": __("Document Overview"), className: "edit-post-editor__document-overview-panel", 
        // @ts-ignore
        ref: sidebarRef, children: _jsx("div", { ref: useMergeRefs([
                contentFocusReturnRef,
                focusOnMountRef,
                listViewRef,
            ]), className: "edit-post-editor__list-view-container", children: _jsx("div", { className: "edit-post-editor__list-view-panel-content", children: _jsx(ListView, {}) }) }) }));
}
//# sourceMappingURL=ListViewSidebar.js.map