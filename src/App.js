import Input from './Input';
import styles from './SASS/App.module.scss';
import { getLocalStorage } from './LocalStorage';
import Header from './Header';
import NewTask from './NewTask';

function App() {
  getLocalStorage();

  return (
    <div className={styles.app}>
      <Header />
      <Input />
      <NewTask />
    </div>
  );
}

export default App;
