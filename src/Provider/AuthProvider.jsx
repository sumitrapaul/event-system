/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import app from "../config/firebase.config";
import {
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider =new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
  
    const googleLogin = () =>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const handleProfileUpdate = (name, picture) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: picture,
      });
    };
  
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
      });
      return () => {
        unSubscribe();
      };
    }, []);
  
    const authInfo = {
      createUser,
      signIn,
      user,
      loading,
      googleLogin,
      logOut,
      handleProfileUpdate
    };

    return (
       <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;