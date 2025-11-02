import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({ children }) => {

    // get Current user info

    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         const uid = user.uid;
    //         console.log('inside AuthCurrentUser: if', user, uid);
    //     } else {
    //         console.log('user is signed out: else',user);
    //     }
    // })

    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, [])


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
        // console.log(email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        return signOut(auth)
    }

    const AuthInfo = {
        user,
        createUser,
        signInUser,
        logoutUser
    }

    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;