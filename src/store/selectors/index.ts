import { createSelector } from 'reselect';
import { AppState } from '..';

const tasks = (state: AppState) => state.tasks;
const filter = (state: AppState) => state.filter;

export const getFilteredTasks = createSelector(
  tasks,
  filter,
  (tasks, filter) => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'all':
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