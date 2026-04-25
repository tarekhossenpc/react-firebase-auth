import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user,setUser] = useState(null)
 
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleLogOut = () => {
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth,(currentUser)=>{
      console.log(currentUser)
      setUser(currentUser)
    })
    return () => {
      unsubscribed()
    }
  },[])

  const authInfo = {
    user,
    handleRegister,
    handleLogin,
    handleLogOut,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
