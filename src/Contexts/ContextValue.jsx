import { useEffect, useState } from 'react';
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
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();
const serverUrl = import.meta.env.VITE_ServerUrl;

const dark = localStorage.getItem('darkTheme');

export const ContextValue = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [darkTheme, setDarkTheme] = useState(dark || false);

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
      if (currentUser) {
        axios.post(
          `${serverUrl}/jwt`,
          { user_email: currentUser.email },
          { withCredentials: true }
        );

        setLoading(false);
      } else {
        axios.post(`${serverUrl}/logout`, {}, { withCredentials: true });

        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    loading,
    setLoading,
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
