import { createContext, useContext } from 'react';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { loginAsync } from '../../api/auth.service';

export const authContext = createContext({});

authContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('super-app:auth', false);

  const login = async (credentials) => {
    const user = await loginAsync(credentials);
    console.log('user', user);
    if (user && user.token) {
      setUser(true);
    } else {
      setUser(false);
    }
  };

  const register = async (credentials) => {};
  const logOut = () => {
    setUser(false);
  };

  return (
    <authContext.Provider
      value={{
        login,
        register,
        logOut,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuthProvider = () => {
  const auth = useContext(authContext);
  if (!auth) {
    throw SyntaxError('AuthProvider is not defined');
  }

  return auth;
};
