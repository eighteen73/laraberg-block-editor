import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { DropdownMenu, MenuGroup, MenuItemsChoice, } from "@wordpress/components";
import { moreVertical } from "@wordpress/icons";
export default function SettingsDropdown({ editorMode, setEditorMode }) {
    return (_jsx(DropdownMenu, { icon: moreVertical, label: "Options", children: ({ onClose }) => (_jsx(_Fragment, { children: _jsx(MenuGroup, { label: "Editor", children: _jsx(MenuItemsChoice, { choices: [
                        {
                            value: "visual",
                            label: "Visual editor",
                        },
                        {
                            value: "text",
                            label: "Code editor",
                        },
                    ], value: editorMode, onSelect: (newMode) => setEditorMode(newMode) }) }) })) }));
}
//# sourceMappingURL=SettingsDropdown.js.map