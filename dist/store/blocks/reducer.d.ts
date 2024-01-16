import BlockEditorState from "../../interfaces/block-editor-state";
import Block from "../../interfaces/block";
export default function reducer(state: BlockEditorState | undefined, action: any): {
    blocks: {
        current: any;
        past: Block[][];
        future: never[];
    };
} | {
    blocks: {
        past: Block[][];
        current: Block[] | undefined;
        future: Block[][];
    };
};
