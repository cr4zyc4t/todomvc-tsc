import { connect } from "react-redux";

import { changeFilter } from "../../actions/filter";
import { clearCompleted } from "../../actions/tasks";
import { countRemainingTasks } from "../../store/selectors";
import { AppState } from "../../store/reducers";

import Footer from "./Footer";

const mapStateToProps = (state: AppState) => ({
  filter: state.filter,
  remainingTasks: countRemainingTasks(state),
});

const mapDispatchToProps = {
  setFilter: changeFilter,
  clearCompleted,
};

export type FooterProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Footer);