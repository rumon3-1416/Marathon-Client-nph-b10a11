import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { useEffect, useState } from 'react';

const googleProvider = new GoogleAuthProvider();

const ContextValue = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);

  // Create User
  const signUpUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  // Sign In User
  const signInUser = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  // Google Sign
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // Update user
  const updateUser = obj => {
    setLoading(true);
    return updateProfile(auth, obj);
  };
  // Sign Out
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  // On Auth Changed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      currentUser ? setUser(currentUser) : setUser(null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return {
    loading,
    darkTheme,
    setDarkTheme,
    user,
    signUpUser,
    googleSignIn,
    signInUser,
    updateUser,
    signOutUser,
  };
};

export default ContextValue;
