import { ToolbarButton, createSlotFill } from "@wordpress/components";
import { createElement } from "@wordpress/element";
import { drawerRight, code } from "@wordpress/icons";
import SettingsDropdown from "./SettingsDropdown";

const { Slot, Fill } = createSlotFill("HeaderToolbar");

interface HeaderProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
  editorMode: string;
  setEditorMode: () => void;
}

const Header = ({
  toggleSidebar,
  sidebarOpen,
  editorMode,
  setEditorMode,
}: HeaderProps) => {
  return (
    <div className="block-editor__header" role="region">
      <Slot className="block-editor__header-toolbar" bubblesVirtually />
      <div style={{ display: "flex" }}>
        <ToolbarButton
          onClick={toggleSidebar}
          isPressed={sidebarOpen}
          icon={drawerRight}
          label={"Settings"}
          disabled={editorMode === "text"}
        />
        <SettingsDropdown
          editorMode={editorMode}
          setEditorMode={setEditorMode}
        />
      </div>
    </div>
  );
};

Header.Fill = Fill;

export default Header;
