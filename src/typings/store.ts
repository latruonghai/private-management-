import type { TaskItem } from './props';
export type NumberState = 1 | 0 | -1;

interface TodoListItemArray {
  todoListArray: TaskItem[];
  currentItem: TaskItem;
}
interface ToggleState {
  isShow: boolean;
}

type StateGlobal = TaskItem | TodoListItemArray | null;

export type { TaskItem, TodoListItemArray, StateGlobal, ToggleState };

