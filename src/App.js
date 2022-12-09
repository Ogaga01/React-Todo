import Input from './Input';
import styles from './SASS/App.module.scss';
import { getLocalStorage } from './LocalStorage';
import Header from './Header';

function App() {
  getLocalStorage();

  return (
    <div className={styles.app}>
      <Header />
      <Input />
    </div>
  );
}

export default App;
