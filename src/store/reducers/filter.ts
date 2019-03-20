import { CHANGE_FILTER, FilterAction } from '../../actions/filter';
import { FILTER } from '../../config';

function users(state = FILTER.ALL, actions: FilterAction): string {
  switch (actions.type) {
    case CHANGE_FILTER:
      return actions.payload.filter;
    default:
      return state;
  }
}
export default users;