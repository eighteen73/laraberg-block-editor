/*

import { createReduxStore, register } from "@wordpress/data";

import actions from "./blocks/actions";
import reducer from "./reducer";
import selectors from "./selectors";

const store = createReduxStore("block-editor", {
  reducer,
  actions,
  selectors,
});

register(store);

*/

/**
 * WordPress dependencies
 */

import { combineReducers, createReduxStore, register } from "@wordpress/data";

/**
 * Internal dependencies
 */

import blocksReducer from "./blocks/reducer";
import blockActions from "./blocks/actions";
import editorReducer from "./editor/reducer";
import editorActions from "./editor/actions";
//import preferencesReducer from "./preferences/reducer";
//import preferenceActions from "./preferences/actions";
//import optionsReducer from "./options/reducer";
//import optionActions from "./options/actions";
import * as blockSelectors from "./blocks/selectors";
import * as editorSelectors from "./editor/selectors";
//import * as preferenceSelectors from "./preferences/selectors";
//import * as optionSelectors from "./options/selectors";

const store = createReduxStore("laraberg-editor", storeConfig());

register(store);

function storeConfig() {
  return {
    reducer: combineReducers({
      blocks: blocksReducer,
      editor: editorReducer,
    }),

    actions: {
      ...blockActions,
      ...editorActions,
    },

    selectors: {
      ...blockSelectors,
      ...editorSelectors,
    },
  };
}
