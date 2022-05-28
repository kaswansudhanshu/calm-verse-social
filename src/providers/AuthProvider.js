import { createContext } from 'react';

const initState = {
  user: null,
  login: () => {},
  logout: () => {},
  loading: true,
};

export const AuthContext = createContext(initState);

export const AuthProvider = ({ childern }) => {
  const auth = useAuthProvider();

  return <AuthContext.Provider value={auth}>{childern}</AuthContext.Provider>;
};
