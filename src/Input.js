import { useState } from 'react';
import styles from './SASS/Input.module.scss';

const Input = () => {
  const [todo, setTodo] = useState('');

  const todoInputHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitInputHandler = (e) => {
    if (e.key === 'Enter') {
      setTodo('');
    }
  };

  return (
    <input className={styles.textInput} type="text" placeholder="Add to your list..." value={todo} onChange={todoInputHandler} onKeyDown={submitInputHandler} />
  );
};

export default Input;
