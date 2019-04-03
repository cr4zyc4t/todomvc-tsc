import * as React from "react";
import uuid from "uuid/v4";

interface HeaderProps {
  addTask(id: string, title: string): void;
}

const Header: React.FC<HeaderProps> = ({ addTask }) => {
  const submitNewTask = (e: React.KeyboardEvent) => {
    if (e.keyCode !== 13) {
      return;
    }

    const input = (e.target as HTMLInputElement);
    const taskTitle = input.value.trim();

    if (taskTitle) {
      addTask(uuid(), taskTitle);
      input.value = "";
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={submitNewTask}
        autoFocus
      />
    </header>
  );
};

export default Header;