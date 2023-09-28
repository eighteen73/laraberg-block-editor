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

function BlockNavigationDropdown({ isDisabled, ...props }, ref) {
  // @ts-ignore
  const hasBlocks = useSelect(
    (select) => !!select(blockEditorStore).getBlockCount(),
    []
  );
  const isEnabled = hasBlocks && !isDisabled;

  return (
    <Dropdown
      contentClassName="block-editor-block-navigation__popover"
      position="bottom right"
      renderToggle={({ isOpen, onToggle }) => (
        <Button
          {...props}
          ref={ref}
          icon={listView}
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={isEnabled ? onToggle : undefined}
          label={__("List view")}
          className="block-editor-block-navigation"
          aria-disabled={!isEnabled}
        />
      )}
      renderContent={() => <ListViewSidebar />}
    />
  );
}

export default forwardRef(BlockNavigationDropdown);
