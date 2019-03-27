import { Action, ActionCreator } from "redux";

export interface TaskPayload {
  id?: string;
  title?: string;
  checked?: boolean;
}

interface PayloadedAction<T> extends Action<T> {
  payload: TaskPayload;
}

interface AddTask extends PayloadedAction<"task-add"> { }
export const addTask: ActionCreator<AddTask> = (id: string, title: string) => ({
  type: "task-add",
  payload: {
    id,
    title,
  },
});

interface EditTask extends PayloadedAction<"task-edit"> { }
export const editTask: ActionCreator<EditTask> = (id: string, title: string) => ({
  type: "task-edit",
  payload: {
    id,
    title,
  },
});

interface DeleteTask extends PayloadedAction<"task-delete"> { }
export const deleteTask: ActionCreator<DeleteTask> = (id: string) => ({
  type: "task-delete",
  payload: {
    id,
  },
});

interface ToggleTask extends PayloadedAction<"task-toggle"> { }
export const toggleTask: ActionCreator<ToggleTask> = (id: string) => ({
  type: "task-toggle",
  payload: {
    id,
  },
});

interface ToggleAll extends PayloadedAction<"task-toggle-all"> { }
export const toggleAll: ActionCreator<ToggleAll> = (checked: boolean) => ({
  type: "task-toggle-all",
  payload: {
    checked,
  },
});

interface ClearComplete extends PayloadedAction<"task-clear-completed"> { }
export const clearCompleted: ActionCreator<ClearComplete> = () => ({
  type: "task-clear-completed",
  payload: {},
});

export type TaskAction = AddTask | EditTask | DeleteTask | ToggleAll | ToggleTask | ClearComplete;