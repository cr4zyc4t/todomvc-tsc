import { connect } from "react-redux";

import { addTask } from "../../actions/tasks";

import Header from "./Header";

const mapDispatchToProps = {
  addTask,
};

export type HeaderProps = typeof mapDispatchToProps;

export default connect(undefined, mapDispatchToProps)(Header);