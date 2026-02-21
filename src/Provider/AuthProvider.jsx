import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const googleProvider = new GoogleAuthProvider();

  // create user site
  const createUser = (name, email, password, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(
      auth,
      name,
      email,
      password,
      photoURL,
    );
  };

  //   singin user email and password
  const singInEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google sing in
  const googleSinIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   log out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //  current user observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (allUser) => {
      const userEmail = allUser?.email || allUser?.email;
      const loginUser = { email: userEmail };
      setUser(loginUser);
      if (allUser) {
        // get token and store client
        axiosPublic.post("jwt")
      } else {
        // do something
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    singInEmailPassword,
    logOut,
    loading,
    updateUserProfile,
    googleSinIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
