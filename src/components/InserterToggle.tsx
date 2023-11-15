import { createElement } from "@wordpress/element";
import { ToolbarButton } from "@wordpress/components";
import { plus as plusIcon } from "@wordpress/icons";

interface InserterToggleProps {
  onToggle: (isOpen: boolean) => void;
  isOpen: boolean;
  toggleProps: any;
  editorMode?: string;
}

const InserterToggle = ({
  onToggle,
  isOpen,
  toggleProps,
  editorMode,
}: InserterToggleProps) => {
  return (
    <ToolbarButton
      isPrimary={true}
      isPressed={isOpen}
      icon={plusIcon}
      onClick={() => onToggle(!isOpen)}
      label={"Add block"}
      disabled={editorMode === "text"}
      {...toggleProps}
    />
  );
};

export default InserterToggle;
