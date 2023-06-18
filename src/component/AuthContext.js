import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const Navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Check if the authToken exists in localStorage
    const authToken = localStorage.getItem('authToken');
    return !!authToken; // Convert to boolean
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('authToken', 'true');
    Navigate('/product');
  };
  const handleSignIn = () => {
    setIsLoggedIn(true);
    localStorage.setItem('authToken', 'true');
    Navigate('/product');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('authToken');
    Navigate('/');
  };
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout,handleSignIn}}>
      {children}
    </AuthContext.Provider>
  );
};
