import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../public/firebase/firebase.init";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSignOut = () => {
    return signOut(auth);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);

      setUser(currentUser);
      setLoading(false);

      if (currentUser?.email) {
        const userData = { email: currentUser.email }; //as we have send the email to the server so we set the current user email from the client side

        axios
          .post("http://localhost:3000/jwt", userData, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token after jwt", res.data);
            const token = res.data.token; //just took the token from res.data
          })
          .catch((err) => console.log(err));
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    loading,
    signInUser,
    user,

    userSignOut,
    googleSignIn,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
