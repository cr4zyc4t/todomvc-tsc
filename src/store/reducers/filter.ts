import { CHANGE_FILTER, FilterAction } from '../../actions/filter';

function users(state = 'all', actions: FilterAction): string {
  switch (actions.type) {
    case CHANGE_FILTER:
      return actions.payload.filter;
    default:
      return state;
  }
}
export default users;