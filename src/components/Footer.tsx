/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import classNames from "classnames";
import pluralize from "pluralize";

import { FILTER } from "../config";

interface FooterProps {
  filter: string;
  remainingTasks: number;
  setFilter(filter: string): void;
  clearCompleted(): void;
}

const Footer: React.FC<FooterProps> = (props) => {
  const setFilter = (filter: string) => (e: React.SyntheticEvent) => {
    e.preventDefault();
    props.setFilter(filter);
  };

  const { remainingTasks, filter, clearCompleted } = props;
  const activeTodoWord = pluralize("item", remainingTasks);
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{remainingTasks}</strong> {activeTodoWord} left
      </span>
      <ul className="filters">
        {
          Object.values(FILTER).map(filterValue => {
            return (
              <li key={filterValue}>
                <a
                  href=""
                  onClick={setFilter(filterValue)}
                  className={classNames({ selected: filter === filterValue })}
                >
                  {filterValue}
                </a>
              </li>
            );
          })
        }
      </ul>
      <button
        className="clear-completed"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;