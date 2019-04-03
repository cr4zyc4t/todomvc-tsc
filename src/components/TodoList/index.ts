import { connect } from "react-redux";

import { editTask, deleteTask, toggleTask, toggleAll } from "../../actions/tasks";
import { getFilteredTasks } from "../../store/selectors";
import { AppState } from "../../store/reducers";

import TodoList from "./TodoList";

const mapStateToProps = (state: AppState) => ({
  filteredTasks: getFilteredTasks(state),
});

const mapDispatchToProps = {
  editTask,
  deleteTask,
  toggleTask,
  toggleAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);