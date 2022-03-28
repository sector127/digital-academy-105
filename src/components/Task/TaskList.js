import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from '../../atoms';

export const TaskList = ({ tasks, onTaskRemove, onTaskUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="row">
      <ul className="list-group p-2">
        {tasks.map((task) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={task.id}
            >
              <div className="col-4">
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={({ target }) => {
                    onTaskUpdate({
                      ...task,
                      done: target.checked,
                    });
                  }}
                />
                <span> {task.text} </span>
              </div>
              <div className="btn-group">
                <Button
                  className="btn btn-outline-secondary"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? 'Update' : 'Edit'}
                </Button>
                <Button className="btn btn-outline-danger" onClick={() => onTaskRemove(task.id)}>
                  Remove
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  onTaskRemove: PropTypes.func.isRequired,
};
