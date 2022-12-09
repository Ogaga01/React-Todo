let tasks = []; //eslint-disable-line

const setLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('tasks'));

  if (!data) return;

  tasks = data;
};

export { tasks, setLocalStorage, getLocalStorage };
