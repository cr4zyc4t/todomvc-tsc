import { connect } from "react-redux";

import { changeFilter } from "../actions/filter";
import { clearCompleted } from "../actions/tasks";
import Footer from "../components/Footer";
import { countRemainingTasks } from "../store/selectors";
import { AppState } from "../store";

const mapStateToProps = (state: AppState) => ({
  filter: state.filter,
  remainingTasks: countRemainingTasks(state),
});

const mapDispatchToProps = {
  setFilter: changeFilter,
  clearCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);