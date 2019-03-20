import { connect } from 'react-redux';

import { Dispatch } from "redux";

import { changeFilter } from '../actions/filter';
import { clearCompleted } from '../actions/tasks';
import Footer from '../components/Footer';
import { countRemainingTasks } from '../store/selectors';
import { AppState } from '../store';

const mapStateToProps = (state: AppState) => ({
  filter: state.filter,
  remainingTasks: countRemainingTasks(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFilter: (filter: string) => dispatch(changeFilter(filter)),
  clearCompleted: () => dispatch(clearCompleted()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);