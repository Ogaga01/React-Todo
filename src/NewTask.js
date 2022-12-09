import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { GrCheckbox } from 'react-icons/gr';
import { GiCheckMark } from 'react-icons/gi';
import { tasks } from './LocalStorage';
import styles from './SASS/NewTask.module.scss';

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
    <ul className={styles.todo}>
      {tasks.map((task) => (!task.checked ? (
        <li key={task.id} className={styles.listitem}>
          <div className={styles.state}>
            <GrCheckbox className={styles.check} onClick={checkHandler} />
          </div>
          <input
            type="text"
            className={styles.listinput}
            value={task.description}
          />
          <FaTrashAlt className={styles.trash} onClick={deleteHandler} />
        </li>
      ) : (
        <li key={task.id} className={styles.listitem}>
          <div className={styles.state}>
            <GiCheckMark className={styles.active} onClick={checkHandler} />
          </div>
          <input
            type="text"
            className={`${styles.listinput} ${styles.linethrough}`}
            value={task.description}
          />
          <FaTrashAlt className={styles.trash} onClick={deleteHandler} />
        </li>
      )))}
    </ul>
  );
};

export default NewTask;
