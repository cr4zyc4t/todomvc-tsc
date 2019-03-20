import * as React from 'react';
import classNames from 'classnames';
import pluralize from 'pluralize';
import { FILTER } from '../config';

interface FooterProps {
  filter: string;
  remainingTasks: number;
  setFilter(filter: string): void;
  clearCompleted(): void;
}

class Footer extends React.Component<FooterProps, {}> {
  setFilter = (filter: string) => (e: React.SyntheticEvent) => {
    e.preventDefault();
    this.props.setFilter(filter);
  }

  render() {
    const { remainingTasks, filter, clearCompleted } = this.props;
    const activeTodoWord = pluralize('item', remainingTasks);
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
                    onClick={this.setFilter(filterValue)}
                    className={classNames({ selected: filter === filterValue })}>
                    {filterValue}
                  </a>
                </li>
              )
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
  }
}

export default Footer;