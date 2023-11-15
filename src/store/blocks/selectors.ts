import Block from "../../interfaces/block";
import BlockEditorState from "../../interfaces/block-editor-state";

export function getBlocks(state) {
  return state.blocks.blocks.current;
}

export function canUndo(state) {
  return state.blocks.blocks.past.length > 0;
}

export function canRedo(state) {
  return state.blocks.blocks.future.length > 0;
}
