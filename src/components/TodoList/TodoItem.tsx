import * as React from "react";
import classNames from "classnames";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  editTask(id: string, title: string): void;
  deleteTask(id: string): void;
  toggleTask(id: string): void;
}

const TodoItem: React.FC<TodoItemProps> = React.memo((props: TodoItemProps) => {

  const [editing, setEditing] = React.useState(false);
  const taskInput = React.useRef(null);

  React.useEffect(() => {
    if (editing && taskInput.current) {
      (taskInput.current as unknown as HTMLInputElement).focus();
    }
  }, [editing]);

  const deleteTask = () => props.deleteTask(props.id);

  const toggleTask = () => props.toggleTask(props.id);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSubmit = () => {
    setEditing(false);
    const title = (taskInput.current as unknown as HTMLInputElement).value.trim();
    if (title && title !== props.title) {
      props.editTask(props.id, title);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode !== 13) {
      return;
    }
    handleSubmit();
  };

  return (
    <li className={classNames({
      completed: props.completed,
      editing: editing,
    })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.completed}
          onChange={toggleTask}
        />
        <label onDoubleClick={handleEdit}>
          {props.title}
        </label>
        <button className="destroy" onClick={deleteTask} />
      </div>
      <input
        ref={taskInput}
        className="edit"
        defaultValue={props.title}
        onBlur={handleSubmit}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
});

export default TodoItem;