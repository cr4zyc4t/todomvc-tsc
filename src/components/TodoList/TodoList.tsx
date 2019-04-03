import * as React from "react";

import TodoItem from "./TodoItem";

import { TodoListProps } from ".";

const TodoList: React.FC<TodoListProps> = (props) => {
  const toggleAll = (e: React.SyntheticEvent) => {
    const { checked } = e.target as HTMLInputElement;
    props.toggleAll(checked);
  };

  const {
    editTask,
    deleteTask,
    toggleTask,
  } = props;

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={toggleAll}
      />
      <label
        htmlFor="toggle-all"
      />
      <ul className="todo-list">
        {
          props.filteredTasks.map((task) => {
            return (
              <TodoItem
                key={task.id}
                {...task}
                editTask={editTask}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            );
          })
        }
      </ul>
    </section>
  );
};

export default TodoList;