import Input from './Input';
import styles from './SASS/App.module.scss';
import { getLocalStorage } from './LocalStorage';

function App() {
  getLocalStorage();

  return (
    <div className={styles.app}>
      <Input />
    </div>
  );
}

export default App;
