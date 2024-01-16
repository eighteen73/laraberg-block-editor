const actions = {
    setEditorMode(editorMode) {
        return {
            type: "SET_EDITOR_MODE",
            editorMode,
        };
    },
    setIsInserterOpened(isOpen) {
        return {
            type: "SET_INSERTER_OPEN",
            isOpen,
        };
    },
    setIsListViewOpened(isOpen) {
        return {
            type: "SET_LISTVIEW_OPEN",
            isOpen,
        };
    },
};
export default actions;
//# sourceMappingURL=actions.js.map