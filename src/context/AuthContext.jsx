import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize state directly from localStorage
  const [authState, setAuthState] = useState(() => {
    const token = localStorage.getItem('token');
    return {
      isAuthenticated: !!token,
      user: null,
      token: token || '',
    };
  });

  useEffect(() => {
    // Check if there is a valid token in localStorage
    const token = localStorage.getItem('token');
    if (token && !authState.isAuthenticated) {
      setAuthState((prevState) => ({
        ...prevState,
        isAuthenticated: true,
        token,
      }));
    }
  }, [authState.isAuthenticated]);

  const login = (data) => {
    localStorage.setItem('token', data.token); // Store token in localStorage
    localStorage.setItem('email', data.email); // Store token in localStorage
    console.log(data)
    setAuthState({
      isAuthenticated: true,
      user: data.user,
      token: data.token,
    });
  };

  const logout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setAuthState({
      isAuthenticated: false,
      user: null,
      token: '',
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
