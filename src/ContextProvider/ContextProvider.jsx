import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.init.config';


export const ContextBDFood = createContext();
const auth = getAuth(app);

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // user registation with email and password 

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    // user login with email and password 

    const userLogout = () => {
        return signOut(auth);
    };
    // user logout 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })

        return () => unsubscribe();
    }, []);
    // current user objervation 

    const BDFoodInfo = { user, userRegister, userLogin, userLogout };

    return (
        <ContextBDFood.Provider value={BDFoodInfo}>
            {children}
        </ContextBDFood.Provider>
    );
};

export default ContextProvider;