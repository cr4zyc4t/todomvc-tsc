import { createStore, applyMiddleware, compose, Dispatch, AnyAction, Middleware, MiddlewareAPI } from "redux";
import thunk from "redux-thunk";

import { FILTER, STORAGE_KEY } from "../config";

import rootReducer, { AppState } from "./reducers";

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

const savedTodosStr = localStorage.getItem(STORAGE_KEY);
let savedTodos: AppState;
if (savedTodosStr) {
  savedTodos = JSON.parse(savedTodosStr);
} else {
  savedTodos = {
    tasks: [],
    filter: FILTER.ALL,
  };
}

/**
 * Save to localstorage on every state change
 */
const saveToStorage: Middleware<{}, AppState, Dispatch<AnyAction>> = (api: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
  const result = next(action);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(api.getState()));
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  savedTodos,
  composeEnhancers(
    applyMiddleware(
      saveToStorage,
      thunk,
    )
  )
);
export default store;
