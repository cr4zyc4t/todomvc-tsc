import { Action, AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { AppState } from "../store/reducers";

export interface TaskPayload {
  id?: string;
  title?: string;
  checked?: boolean;
}

export interface PayloadedAction<T> extends Action<T> {
  payload: TaskPayload;
}

interface AddTask extends PayloadedAction<"task-add"> { }
export const addTask = (id: string, title: string): AddTask => ({
  type: "task-add",
  payload: {
    id,
    title,
  },
});

interface EditTask extends PayloadedAction<"task-edit"> { }
export const editTask = (id: string, title: string): EditTask => ({
  type: "task-edit",
  payload: {
    id,
    title,
  },
});

interface DeleteTask extends PayloadedAction<"task-delete"> { }
export const deleteTask = (id: string): DeleteTask => ({
  type: "task-delete",
  payload: {
    id,
  },
});

interface ToggleTask extends PayloadedAction<"task-toggle"> { }
export const toggleTask = (id: string): ToggleTask => ({
  type: "task-toggle",
  payload: {
    id,
  },
});

interface ToggleAll extends PayloadedAction<"task-toggle-all"> { }
export const toggleAll = (checked: boolean): ToggleAll => ({
  type: "task-toggle-all",
  payload: {
    checked,
  },
});

interface ClearComplete extends PayloadedAction<"task-clear-completed"> { }
export const clearCompleted = (): ClearComplete => ({
  type: "task-clear-completed",
  payload: {},
});

function delay(miliseconds = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, miliseconds);
  });
}

export const asyncClearComplete = () => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
  getState: () => AppState
) => {
  await delay(500);
  dispatch(clearCompleted());
};

export type TaskAction = AddTask | EditTask | DeleteTask | ToggleAll | ToggleTask | ClearComplete;