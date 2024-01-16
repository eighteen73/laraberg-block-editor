import EditorSettings from "../interfaces/editor-settings";
import Block from "../interfaces/block";
import "@wordpress/format-library";
interface BlockEditorProps {
    settings: EditorSettings;
    blocks: Block[];
    onChange: (blocks: Block[]) => void;
    undo?: () => void;
    redo?: () => void;
    canUndo?: boolean;
    canRedo?: boolean;
    editorMode?: string;
    isInserterOpen: boolean;
    setIsInserterOpened: (isOpen: boolean) => void;
}
declare const BlockEditor: ({ settings, onChange, blocks, undo, redo, canUndo, canRedo, editorMode, isInserterOpen, setIsInserterOpened, }: BlockEditorProps) => import("react/jsx-runtime").JSX.Element;
export default BlockEditor;
