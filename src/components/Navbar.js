import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className={styles.leftDiv}>
        <a href="/">
          <img alt="" src="" />
        </a>
      </div>
      <div className={styles.rightNav}>
        <div className={styles.user}>
          <Link to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
              alt=""
              className={styles.userDp}
            />
          </Link>
          <span>Sudhanshu</span>
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/">Log out</Link>
            </li>
            <li>
              <Link to="/">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
