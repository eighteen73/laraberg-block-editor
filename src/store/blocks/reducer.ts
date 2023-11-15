/**
 * External dependencies
 */
import undoable from "redux-undo";

/**
 * WordPress dependencies
 */
import isShallowEqual from "@wordpress/is-shallow-equal";
import BlockEditorState from "../../interfaces/block-editor-state";
import { REDO, SET_BLOCKS, UNDO } from "./actions";

import { v4 as uuid } from "uuid";
import Block from "../../interfaces/block";

const DEFAULT_STATE: BlockEditorState = {
  blocks: {
    past: [],
    current: [],
    future: [],
  },
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_BLOCKS:
      return {
        ...state,
        blocks: {
          current: action.blocks,
          past: [...state.blocks.past.slice(-19), state.blocks.current],
          future: [],
        },
      };
    case UNDO:
      if (state.blocks.past.length === 0) return state;
      const past = state.blocks.past;
      const undoCurrent = past.pop();
      return {
        ...state,
        blocks: {
          past,
          current: undoCurrent,
          future: [state.blocks.current, ...state.blocks.future],
        },
      };
    case REDO:
      if (state.blocks.future.length === 0) return state;
      const future = state.blocks.future;
      const redoCurrent = future.shift();
      return {
        ...state,
        blocks: {
          past: [...state.blocks.past, state.blocks.current],
          current: redoCurrent,
          future,
        },
      };
  }

  return state;
}
