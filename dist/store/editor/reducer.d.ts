declare const reducer: (state: {
    editorMode: string;
    isInserterOpened: boolean;
    isListViewOpened: boolean;
} | undefined, action: any) => {
    editorMode: any;
    isInserterOpened: boolean;
    isListViewOpened: boolean;
} | {
    isInserterOpened: any;
    isInspectorOpened: boolean;
    isListViewOpened: boolean;
    editorMode: string;
} | {
    isInserterOpened: boolean;
    isInspectorOpened: boolean;
    isListViewOpened: any;
    editorMode: string;
};
export default reducer;
