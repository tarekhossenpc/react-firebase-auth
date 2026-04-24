import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };


    const authInfo = {name:'Tarek Hossen',email:'tarek@example.com', handleRegister, handleLogin};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;