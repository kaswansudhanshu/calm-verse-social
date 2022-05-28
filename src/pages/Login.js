import { useState } from 'react';
import { addToast } from 'react-toast-notification';
import { login } from '../api';
import styles from '../styles/login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    if (!password || !email) {
      return addToast('Please fill the required fields', {
        appearance: 'error',
      });
    }

    const res = await login(email, password);
    if (res.success) {
      addToast('Login Successful', {
        appearance: 'success',
      });
    } else {
      addToast(res.message, {
        appearance: 'error',
      });
    }
    setIsLoggingIn(false);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginFormHeader}>Log In</span>

      <div className={styles.field}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <button disabled={isLoggingIn}>
          {isLoggingIn ? 'Logging in..' : 'Log In'}
        </button>
      </div>
    </form>
  );
};

export default Login;
