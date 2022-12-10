import { useRef } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { GrCheckbox } from 'react-icons/gr';
import { GiCheckMark } from 'react-icons/gi';
import styles from './SASS/NewTask.module.scss';

const NewTask = (props) => {
  const listItemRef = useRef();

  const checkHandler = () => {
    console.log('clicked');
  };

  const deleteHandler = () => {
    console.log('delete');
  };

  const inputChangeHandler = (e) => {
    if (e.key === 'Enter') {
      console.log(listItemRef.current.id);
      props.onChangeInput(e.target.value);
    }
  };

  return (
    <ul className={styles.todo}>
      {props.tasks.map((task) => (!task.checked ? (
        <li key={task.id} id={task.id} className={styles.listitem} ref={listItemRef}>
          <div className={styles.state}>
            <GrCheckbox className={styles.check} onClick={checkHandler} />
          </div>
          <input
            type="text"
            className={styles.listinput}
            defaultValue={task.description}
            onKeyDown={inputChangeHandler}
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
