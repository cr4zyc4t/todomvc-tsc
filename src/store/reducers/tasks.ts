import { TaskAction, TaskPayload } from "../../actions/tasks";
// import { createReducer } from "../../utils";

function addTask(state: TaskState, { id, title }: TaskPayload): TaskState {
  if (id && title) {
    return [{
      id,
      title,
      completed: false,
    }, ...state];
  }
  return state;
};

function editTask(state: TaskState, { id, title }: TaskPayload): TaskState {
  return state.map(task => {
    if (task.id === id) {
      return {
        id,
        title: title || "",
        completed: task.completed,
      };
    }
    return task;
  });
};

function deleteTask(state: TaskState, { id }: TaskPayload): TaskState {
  return state.filter(task => task.id !== id);
}

function toggleTask(state: TaskState, { id }: TaskPayload): TaskState {
  return state.map(task => {
    if (task.id === id) {
      return {
        ...task,
        completed: !task.completed,
      };
    }
    return task;
  });
}

const clearCompleted = (state: TaskState) => state.filter(task => !task.completed);

function toggleAll(state: TaskState, { checked }: TaskPayload): TaskState {
  return state.map(task => ({ ...task, completed: !!checked }));
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}
export type TaskState = Task[];

type ActionHanlder = (state: TaskState, payload: TaskPayload) => TaskState;

const tasks = (state = [] as TaskState, { type, payload }: TaskAction) => {
  let actionHandler: ActionHanlder;
  switch (type) {
    case "task-add":
      actionHandler = addTask;
      break;
    case "task-edit":
      actionHandler = editTask;
      break;
    case "task-delete":
      actionHandler = deleteTask;
      break;
    case "task-toggle":
      actionHandler = toggleTask;
      break;
    case "task-clear-completed":
      actionHandler = clearCompleted;
      break;
    case "task-toggle-all":
      actionHandler = toggleAll;
      break;
    default:
      return state;
  }
  return actionHandler(state, payload);
};

// const tasks = createReducer([] as TaskState, {
//   "task-add": addTask,
//   "task-edit": editTask,
//   "task-delete": deleteTask,
//   "task-toggle": toggleTask,
//   "task-clear-completed": clearCompleted,
//   "task-toggle-all": toggleAll,
// });

export default tasks;
