import { useState } from 'react';
import styles from './SASS/Input.module.scss';
import { setLocalStorage, tasks } from './LocalStorage';
import Task from './Task';

const Input = () => {
  const [todo, setTodo] = useState('');

  const todoInputHandler = (e) => {
    console.log(e.target.value); //eslint-disable-line
    const task = new Task(e.target.value);
    setTodo(e.target.value);
    tasks.push(task);
    setLocalStorage(task);
  };

  const submitInputHandler = (e) => {
    if (e.key === 'Enter') {
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
