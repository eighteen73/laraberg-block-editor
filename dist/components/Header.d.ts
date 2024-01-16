interface HeaderProps {
    toggleSidebar: () => void;
    sidebarOpen: boolean;
    editorMode: string;
    setEditorMode: () => void;
}
declare const Header: {
    ({ toggleSidebar, sidebarOpen, editorMode, setEditorMode, }: HeaderProps): import("react/jsx-runtime").JSX.Element;
    Fill: any;
};
export default Header;
