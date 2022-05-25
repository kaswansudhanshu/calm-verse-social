import styles from '../styles/navbar.module.css';

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
          <a href="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
              alt=""
              className={styles.userDp}
            />
          </a>
          <span>Sudhanshu</span>
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li>
              <a href="/">Log in</a>
            </li>
            <li>
              <a href="/">Log out</a>
            </li>
            <li>
              <a href="/">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
