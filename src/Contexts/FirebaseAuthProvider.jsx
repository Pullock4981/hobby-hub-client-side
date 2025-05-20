// Login page

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Firebase.init";
import { AuthContext } from "./AuthContext"; // Import the actual context

const googleProvider = new GoogleAuthProvider();

const FirebaseAuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Register
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Sign-In
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Logout
    const SignOutUser = () => {
        setLoading(true);
        setUser(null);
        return signOut(auth);
    }

    // Monitor Auth State
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log('User is signed in:', currentUser);
                setUser(currentUser);
            } else {
                console.log('No user is signed in.');
                setUser(null);
            }
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);

    const userInfo = {
        user,
        loading,
        createUser,
        logInUser,
        googleSignIn,
        SignOutUser
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseAuthProvider;
