import { __ } from "@wordpress/i18n";
import { createElement, useEffect, useCallback } from "@wordpress/element";
import { useDispatch } from "@wordpress/data";

import { useShortcut, store } from "@wordpress/keyboard-shortcuts";

const KeyboardShortcuts = () => {
  const { undo, redo } = useDispatch("laraberg-editor");

  useShortcut(
    "laraberg-editor/undo",
    useCallback(
      (event: Event) => {
        event.preventDefault();
        undo();
      },
      [undo]
    ),
    { bindGlobal: true }
  );

  useShortcut(
    "laraberg-editor/redo",
    useCallback(
      (event: Event) => {
        event.preventDefault();
        redo();
      },
      [redo]
    ),
    { bindGlobal: true }
  );

  return null;
};

const KeyboardShortcutsRegister = () => {
  const { registerShortcut } = useDispatch(store);

  useEffect(() => {
    registerShortcut({
      name: "laraberg-editor/undo",
      category: "global",
      description: __("Undo"),
      keyCombination: {
        modifier: "primary",
        character: "z",
      },
    });

    registerShortcut({
      name: "laraberg-editor/redo",
      category: "global",
      description: __("Redo"),
      keyCombination: {
        modifier: "primaryShift",
        character: "z",
      },
    });
  }, [registerShortcut]);

  return null;
};

KeyboardShortcuts.Register = KeyboardShortcutsRegister;

export default KeyboardShortcuts;
