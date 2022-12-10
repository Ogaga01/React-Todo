import { useRef } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { GrCheckbox } from 'react-icons/gr';
import { GiCheckMark } from 'react-icons/gi';
// import { tasks } from './LocalStorage';
import styles from './SASS/NewTask.module.scss';

const NewTask = (props) => {
//   const [checked, setChecked] = useState(false);
    // const [inputvalue, setInputValue] = useState('')
    const listItemRef = useRef()

  const checkHandler = () => {
    console.log('clicked');
  };

  const deleteHandler = (id) => {
    props.tasks.filter((task) => task.id !== id);
  };
    
    const inputChangeHandler = (e) => {
        if (e.key === 'Enter')
        {
            console.log(listItemRef.current)
            props.onChangeInput(e.target.value)
        }
    }

  return (
    <ul className={styles.todo}>
      {props.tasks.map((task) =>
        !task.checked ? (
          <li key={task.id} className={styles.listitem} ref={listItemRef}>
            <div className={styles.state}>
              <GrCheckbox className={styles.check} onClick={checkHandler} />
            </div>
            <input
              type="text"
              className={styles.listinput}
                      defaultValue={task.description}
                      onKeyDown={inputChangeHandler}
            //   onChange={inputChangeHandler}
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
            //   onChange={inputChangeHandler}
            />
            <FaTrashAlt className={styles.trash} onClick={deleteHandler} />
          </li>
        )
      )}
    </ul>
  );
};

export default NewTask;
