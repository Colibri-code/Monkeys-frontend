import React, { useContext, createContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => (
  <AuthContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AuthContext.Provider>
);

export const useAuthContext = () => useContext(AuthContext);
