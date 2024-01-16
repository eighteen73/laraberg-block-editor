export const SET_BLOCKS = "SET_BLOCKS";
export const DUPLICATE_BLOCKS = "DUPLICATE_BLOCKS";
export const REMOVE_BLOCK = "REMOVE_BLOCK";
export const REMOVE_BLOCKS = "REMOVE_BLOCKS";
export const UNDO = "UNDO";
export const REDO = "REDO";
export const UPDATE_BLOCKS_WITH_UNDO = "UPDATE_BLOCKS_WITH_UNDO";
export const UPDATE_BLOCKS_WITHOUT_UNDO = "UPDATE_BLOCKS_WITHOUT_UNDO";
const actions = {
    setBlocks(blocks) {
        return {
            type: SET_BLOCKS,
            blocks,
        };
    },
    duplicateBlocks(blockIds) {
        return {
            type: DUPLICATE_BLOCKS,
            blockIds,
        };
    },
    removeBlock(blockId) {
        return {
            type: REMOVE_BLOCKS,
            blockIds: [blockId],
        };
    },
    removeBlocks(blockIds) {
        return {
            type: REMOVE_BLOCKS,
            blockIds,
        };
    },
    undo() {
        return { type: UNDO };
    },
    redo() {
        return { type: REDO };
    },
};
export default actions;
//# sourceMappingURL=actions.js.map