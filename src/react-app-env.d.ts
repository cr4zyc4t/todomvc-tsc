/// <reference types="react-scripts" />

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

// export interface Todo {
//   id: string,
//   title: string,
//   completed: boolean,
// }

// export interface AppState {
//   filter: string,
//   tasks: Todo[],
// }

// interface ReduxAction<AType, APayload> {
//   type: AType;
//   payload: APayload;
// }

// type StateDispatcher = (action: ReduxAction) => void;