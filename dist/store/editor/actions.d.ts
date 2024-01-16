declare const actions: {
    setEditorMode(editorMode: any): {
        type: string;
        editorMode: any;
    };
    setIsInserterOpened(isOpen: any): {
        type: string;
        isOpen: any;
    };
    setIsListViewOpened(isOpen: any): {
        type: string;
        isOpen: any;
    };
};
export default actions;
