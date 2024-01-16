interface InserterToggleProps {
    onToggle: (isOpen: boolean) => void;
    isOpen: boolean;
    toggleProps: any;
    editorMode?: string;
}
declare const InserterToggle: ({ onToggle, isOpen, toggleProps, editorMode, }: InserterToggleProps) => import("react/jsx-runtime").JSX.Element;
export default InserterToggle;
