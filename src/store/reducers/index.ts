import { combineReducers } from "redux";

import tasks from "./tasks";
import filter from "./filter";

const rootReducer = combineReducers({
  tasks,
  filter,
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;