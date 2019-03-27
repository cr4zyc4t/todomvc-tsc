import * as React from "react";

import { Task } from "../store/reducers/tasks";

import TodoItem from "./TodoItem";

interface TodoListProps {
  filteredTasks: Task[];
  toggleAll(checked: boolean): void;
  editTask(id: string, title: string): void;
  deleteTask(id: string): void;
  toggleTask(id: string): void;
}

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