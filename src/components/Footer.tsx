import * as React from 'react';
import classNames from 'classnames';
import pluralize from 'pluralize';

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
          <li>
            <a
              href=""
              onClick={this.setFilter('all')}
              className={classNames({ selected: filter === 'all' })}>
              All
            </a>
          </li>
          &nbsp;
          <li>
            <a
              href=""
              onClick={this.setFilter('active')}
              className={classNames({ selected: filter === 'active' })}>
              Active
            </a>
          </li>
          &nbsp;
          <li>
            <a
              href=""
              onClick={this.setFilter('completed')}
              className={classNames({ selected: filter === 'completed' })}>
              Completed
            </a>
          </li>
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