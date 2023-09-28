/**
 * WordPress dependencies
 */
import { __experimentalListView as ListView } from "@wordpress/block-editor";
import {
  useFocusOnMount,
  useFocusReturn,
  useMergeRefs,
} from "@wordpress/compose";
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
    <div
      aria-label={__("Document Overview")}
      className="edit-post-editor__document-overview-panel"
      // @ts-ignore
      ref={sidebarRef}
    >
      <div
        ref={useMergeRefs([
          contentFocusReturnRef,
          focusOnMountRef,
          listViewRef,
        ])}
        className="edit-post-editor__list-view-container"
      >
        <div className="edit-post-editor__list-view-panel-content">
          <ListView />
        </div>
      </div>
    </div>
  );
}
