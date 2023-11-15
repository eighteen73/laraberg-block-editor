const DEFAULT_STATE = {
  editorMode: "visual",
  isInserterOpened: false,
  isListViewOpened: false,
};

const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "SET_EDITOR_MODE":
      return {
        ...state,
        editorMode: action.editorMode,
      };

    case "SET_INSERTER_OPEN":
      return {
        ...state,
        isInserterOpened: action.isOpen,
        isInspectorOpened: false,
        isListViewOpened: false,
      };

    case "SET_LISTVIEW_OPEN":
      return {
        ...state,
        isInserterOpened: false,
        isInspectorOpened: false,
        isListViewOpened: action.isOpen,
      };
  }

  return state;
};

export default reducer;
