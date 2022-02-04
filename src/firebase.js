import React, { useEffect, useState } from "react"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfeiBo2ye8q_HQymsAfqx2rrMH-1FWU4c",
  authDomain: "sur-automation-3a85e.firebaseapp.com",
  databaseURL: "https://sur-automation-3a85e-default-rtdb.firebaseio.com",
  projectId: "sur-automation-3a85e",
  storageBucket: "sur-automation-3a85e.appspot.com",
  messagingSenderId: "836594047595",
  appId: "1:836594047595:web:42cd99b8d2e2e2cfe1ef2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export default getFirestore();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function login(email,password) {
  return signInWithEmailAndPassword(auth, email, password)
}

export  function logout() {
  return signOut(auth)
}

export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState()
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
    return unsub
  }, [])
  return currentUser
}