import { createSelector } from "reselect";

import { AppState } from "..";

import { FILTER } from "../../config";

const tasks = (state: AppState) => state.tasks;
const filter = (state: AppState) => state.filter;

export const getFilteredTasks = createSelector(
  tasks,
  filter,
  (tasks, filter) => {
    switch (filter) {
      case FILTER.ACTIVE:
        return tasks.filter(task => !task.completed);
      case FILTER.COMPLETED:
        return tasks.filter(task => task.completed);
      case FILTER.ALL:
      default:
        return tasks;
    }
  }
);

export const countRemainingTasks = createSelector(
  tasks,
  (tasks) => {
    return tasks.filter(task => !task.completed).length;
  }
);