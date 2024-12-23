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
const serverUrl = 'http://localhost:5000';

export const ContextValue = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);

  // Create User
  const emailPassSignUp = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  // Sign In User
  const emailPassSignIn = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  // Google Sign
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // Update user
  const updateUserProfile = (user = auth.currentUser, obj) => {
    setLoading(true);
    return updateProfile(user, obj);
  };
  // Sign Out
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  // On Auth Changed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return {
    loading,
    darkTheme,
    setDarkTheme,
    serverUrl,
    user,
    emailPassSignUp,
    googleSignIn,
    emailPassSignIn,
    updateUserProfile,
    signOutUser,
  };
};
