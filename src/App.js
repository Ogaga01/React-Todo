import { useState } from 'react';
import Input from './Input';
import styles from './SASS/App.module.scss';
import { getLocalStorage, setLocalStorage, tasks } from './LocalStorage';
import Header from './Header';
import NewTask from './NewTask';
import Task from './Task';
import Button from './Button';

function App() {
  const [task, setTask] = useState(tasks);

  getLocalStorage();

  const addnewTodoHandler = (todo) => {
    const item = new Task(todo);
    setTask((previousState) => [item, ...previousState]);
  };
  console.log(task);
  setLocalStorage(task);

  return (
    <div className={styles.app}>
      <Header />
      <Input onAddNewTodo={addnewTodoHandler} />
      <NewTask tasks={task} />
      <Button/>
    </div>
  );
}

export default App;
