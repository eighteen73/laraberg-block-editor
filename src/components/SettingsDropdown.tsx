import {
  DropdownMenu,
  MenuGroup,
  MenuItemsChoice,
} from "@wordpress/components";

import { moreVertical } from "@wordpress/icons";

export default function SettingsDropdown({ editorMode, setEditorMode }) {
  return (
    <DropdownMenu icon={moreVertical} label="Options">
      {({ onClose }) => (
        <>
          <MenuGroup label="Editor">
            <MenuItemsChoice
              choices={[
                {
                  value: "visual",
                  label: "Visual editor",
                },
                {
                  value: "text",
                  label: "Code editor",
                },
              ]}
              value={editorMode}
              onSelect={(newMode) => setEditorMode(newMode)}
            />
          </MenuGroup>
        </>
      )}
    </DropdownMenu>
  );
}
