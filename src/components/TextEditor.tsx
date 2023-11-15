import PostTextEditor from "./PostTextEditor";

export default function TextEditor() {
  return (
    <div className="edit-post-text-editor" style={{ height: "100%" }}>
      <div className="edit-post-text-editor__body" style={{ height: "100%" }}>
        <PostTextEditor />
      </div>
    </div>
  );
}
