import { useState } from 'react';
import styles from './SASS/Input.module.scss';

const Input = (props) => {
  const [todo, setTodo] = useState('');
  // const [taskItems, setTaskItems] = useState(tasks)

  const todoInputHandler = (e) => {
    console.log(e.target.value); //eslint-disable-line
    setTodo(e.target.value);
  };

  const submitInputHandler = (e) => {
    if (e.key === 'Enter') {
        console.log(e.target.value); //eslint-disable-line
      props.onAddNewTodo(e.target.value);
      setTodo('');
    }
  };

  return (
    <input
      className={styles.textInput}
      type="text"
      placeholder="Add to your list..."
      value={todo}
      onChange={todoInputHandler}
      onKeyDown={submitInputHandler}
    />
  );
};

export default Input;
