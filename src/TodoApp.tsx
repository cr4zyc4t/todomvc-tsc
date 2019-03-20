import * as React from "react";

import Header from "./containers/Header";
import TodoList from "./containers/TodoList";
import Footer from "./containers/Footer";

import "normalize.css";
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

const TodoApp: React.FC = () => (
  <div className="todoapp">
    <Header />
    <TodoList />
    <Footer />
  </div>
);

export default TodoApp;