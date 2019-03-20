import { Action, ActionCreator } from "redux";

export interface TaskPayload {
  id?: string;
  title?: string;
  checked?: boolean;
}

export interface TaskAction extends Action<string> {
  payload: TaskPayload;
}

export const ADD_TASK = 'ADD_TASK';
export const addTask: ActionCreator<TaskAction> = (id: string, title: string) => ({
  type: ADD_TASK,
  payload: {
    id,
    title,
  }
});

export const EDIT_TASK = 'EDIT_TASK';
export const editTask: ActionCreator<TaskAction> = (id: string, title: string) => ({
  type: EDIT_TASK,
  payload: {
    id,
    title,
  }
});

export const DELETE_TASK = 'DELETE_TASK';
export const deleteTask: ActionCreator<TaskAction> = (id: string) => ({
  type: DELETE_TASK,
  payload: {
    id,
  }
});

export const TOGGLE_TASK = 'TOGGLE_TASK';
export const toggleTask: ActionCreator<TaskAction> = (id: string) => ({
  type: TOGGLE_TASK,
  payload: {
    id,
  }
});

export const TOGGLE_ALL = 'TOGGLE_ALL';
export const toggleAll: ActionCreator<TaskAction> = (checked: boolean) => ({
  type: TOGGLE_ALL,
  payload: {
    checked
  }
});

export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const clearCompleted: ActionCreator<Action> = () => ({
  type: CLEAR_COMPLETED,
});
