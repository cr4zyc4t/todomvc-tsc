import * as React from "react";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

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