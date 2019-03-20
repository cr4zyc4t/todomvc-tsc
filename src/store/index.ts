import { createStore, applyMiddleware, compose, Dispatch, AnyAction, Store, Middleware } from 'redux';
import rootReducer from './reducers';
import { Task } from './reducers/tasks';

export interface AppState {
  filter: string,
  tasks: Task[],
}

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

let savedTodosStr = localStorage.getItem('todomvc-react-redux');
let savedTodos: AppState;
if (savedTodosStr) {
  savedTodos = JSON.parse(savedTodosStr);
} else {
  savedTodos = {
    tasks: [],
    filter: 'all'
  };
}

/**
 * Save to localstorage on every state change
 */
const saveToStorage: Middleware<{}, AppState, Dispatch<AnyAction>> = (api) => (next: Dispatch) => (action: AnyAction) => {
  const result = next(action);
  localStorage.setItem('todomvc-react-redux', JSON.stringify(store.getState()));
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  savedTodos as any,
  composeEnhancers(
    applyMiddleware(
      saveToStorage
    )
  )
);
export default store;