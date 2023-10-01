"use client"

import { useContext, createContext, useState, useEffect } from "react";
import {
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
} from "firebase/auth";
import { auth } from '../Firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authData, setAuthData] = useState(() => {

        const storedAuthData = localStorage.getItem('authData');
        return storedAuthData ? JSON.parse(storedAuthData) : null;
    });
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);

    };

    const logOut = () => {
        signOut(auth);
        setAuthData(null);

    };

    const updateAuthData = (newAuthData) => {
        setAuthData(newAuthData);
    };


    useEffect(() => {
        localStorage.setItem('authData', JSON.stringify(authData));

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [user, authData]);




    return (
        <AuthContext.Provider value={{ user, googleSignIn, logOut, authData, updateAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};