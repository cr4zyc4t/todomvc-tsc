import { PayloadedAction } from "../actions/tasks";

type Handlers<State, Types extends string, Actions extends PayloadedAction<Types>> = {
  readonly [Type in Types]: (state: State, payload: Actions["payload"]) => State
}
export const createReducer = <State, Types extends string, Actions extends PayloadedAction<Types>>(
  initialState: State,
  handlers: Handlers<State, Types, Actions>,
) => (state = initialState, action: Actions) =>
    handlers.hasOwnProperty(action.type) ? handlers[action.type as Types](state, action.payload) : state;