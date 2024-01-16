export function getBlocks(state) {
    return state.blocks.blocks.current;
}
export function canUndo(state) {
    return state.blocks.blocks.past.length > 0;
}
export function canRedo(state) {
    return state.blocks.blocks.future.length > 0;
}
//# sourceMappingURL=selectors.js.map