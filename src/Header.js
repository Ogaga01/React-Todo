import { FiRotateCw } from 'react-icons/fi';
import styles from './SASS/Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <p className={styles.title}>My List Todo</p>
    <FiRotateCw className={styles.rotate} />
  </div>
);

export default Header;
