import { FilterAction } from "../../actions/filter";
import { FILTER } from "../../config";

function users(state = FILTER.ALL, actions: FilterAction): string {
  switch (actions.type) {
    case "change-filter":
      return actions.payload.filter;
    default:
      return state;
  }
}
export default users;