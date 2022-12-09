import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { GrCheckbox } from 'react-icons/gr';
import { GiCheckMark } from 'react-icons/gi';
import { tasks } from './LocalStorage';

const NewTask = () => {
  const [checked, setChecked] = useState(false);

  const checkHandler = (id) => {
    tasks.forEach((task) => {
      if (task.id === id) {
        setChecked(!checked);
      }
    });
  };

  const deleteHandler = (id) => {
    tasks.filter((task) => task.id !== id);
  };

  return (
    <ul>
      {tasks.map((task) => (!task.checked ? (
        <li key={task.id} className="list-item">
          <div className="state">
            <GrCheckbox className="check" onClick={checkHandler} />
          </div>
          <input
            type="text"
            className="list-input"
            value={task.description}
          />
          <FaTrashAlt className="trash" onClick={deleteHandler} />
        </li>
      ) : (
        <li key={task.id} className="list-item">
          <div className="state">
            <GiCheckMark className="active" onClick={checkHandler} />
          </div>
          <input
            type="text"
            className="list-input line-through"
            value={task.description}
          />
          <FaTrashAlt className="trash" onClick={deleteHandler} />
        </li>
      )))}
    </ul>
  );
};

export default NewTask;
