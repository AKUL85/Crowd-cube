import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useContext, useState } from 'react';
import { auth } from '../Firebase/firebase.init';

const AuthContext = createContext();
const provider=new GoogleAuthProvider()
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(false);

    const createAccountWithEmailPassword=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInWithEmailPassword=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithPopUp=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createAccountWithEmailPassword,
    signInWithEmailPassword,
    signInWithPopUp,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
