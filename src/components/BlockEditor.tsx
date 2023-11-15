import { createElement, useRef, useCallback } from "@wordpress/element";
import { store as keyboardShortcutsStore } from "@wordpress/keyboard-shortcuts";

import {
  BlockEditorProvider,
  BlockInspector,
  BlockList,
  BlockTools,
  Inserter,
  ObserveTyping,
  WritingFlow,
  BlockEditorKeyboardShortcuts,
} from "@wordpress/block-editor";
import {
  ToolbarButton,
  Popover,
  Button,
  ToolbarItem,
} from "@wordpress/components";

import { withDispatch, useDispatch, useSelect } from "@wordpress/data";

import { undo as undoIcon, redo as redoIcon, listView } from "@wordpress/icons";

import Header from "./Header";
import Sidebar from "./Sidebar";
import InserterToggle from "./InserterToggle";
import EditorSettings from "../interfaces/editor-settings";
import Block from "../interfaces/block";
import Notices from "./Notices";

import BlockNavigationDropdown from "./BlockNavigationDropdown";

import "@wordpress/format-library";
import TextEditor from "./TextEditor";

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

const BlockEditor = ({
  settings,
  onChange,
  blocks,
  undo,
  redo,
  canUndo,
  canRedo,
  editorMode,
  isInserterOpen,
  setIsInserterOpened,
}: BlockEditorProps) => {
  const inputTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleInput = (blocks: Block[]) => {
    if (inputTimeout.current) {
      clearTimeout(inputTimeout.current);
    }

    inputTimeout.current = setTimeout(() => {
      onChange(blocks);
    }, 500);
  };

  const handleChange = (blocks: Block[]) => {
    if (inputTimeout.current) {
      clearTimeout(inputTimeout.current);
    }

    onChange(blocks);
  };

  return (
    <div className="block-editor__editor wp-embed-responsive">
      <BlockEditorProvider
        value={blocks}
        onInput={handleInput}
        onChange={handleChange}
        settings={settings}
      >
        <Notices />
        <Header.Fill>
          <Inserter
            renderToggle={(props) => (
              <InserterToggle {...props} editorMode={editorMode} />
            )}
          />
          <ToolbarButton
            icon={undoIcon}
            onClick={undo}
            disabled={!canUndo || editorMode === "text"}
            className={"history-button"}
          />
          <ToolbarButton
            icon={redoIcon}
            onClick={redo}
            disabled={!canRedo || editorMode === "text"}
            className={"history-button"}
          />
          <ToolbarItem
            as={BlockNavigationDropdown}
            isDisabled={editorMode === "text"}
          />
        </Header.Fill>
        <Sidebar.Fill>
          <BlockInspector />
        </Sidebar.Fill>
        {editorMode === "text" && <TextEditor />}
        {editorMode === "visual" && (
          <BlockTools>
            <BlockEditorKeyboardShortcuts.Register />
            <div className="editor-styles-wrapper">
              <WritingFlow>
                <ObserveTyping>
                  <BlockList />
                </ObserveTyping>
              </WritingFlow>
            </div>
          </BlockTools>
        )}

        <Popover.Slot />
      </BlockEditorProvider>
    </div>
  );
};

export default BlockEditor;
