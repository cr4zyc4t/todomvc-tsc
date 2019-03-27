import { connect } from "react-redux";

import { addTask } from "../actions/tasks";
import Header from "../components/Header";

const mapDispatchToProps = {
  addTask,
};

export default connect(undefined, mapDispatchToProps)(Header);