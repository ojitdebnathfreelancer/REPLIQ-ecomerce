import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/Firebase.init.config';


export const ContextBDFood = createContext();
const auth = getAuth(app);

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const userRegister = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password)
    };
    // user registation with email and password 

    const userLogin = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password)
    };
    // user login with email and password 

    const userLogout = () => {
        setLoading(false);
        return signOut(auth)
    };
    // user logout 

    const userUpdate = (profile) => {
        setLoading(false);
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
        })

        return () => unsubscribe();
    }, []);
    // current user objervation 

    const BDFoodInfo = { user, userRegister, userLogin, userUpdate, userLogout, loading };

    return (
        <ContextBDFood.Provider value={BDFoodInfo}>
            {children}
        </ContextBDFood.Provider>
    );
};

export default ContextProvider;