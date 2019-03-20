import { connect } from 'react-redux';
import { addTask } from '../actions/tasks';
import Header from '../components/Header';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTask: (id: string, title: string) => dispatch(addTask(id, title))
});

export default connect(undefined, mapDispatchToProps)(Header);