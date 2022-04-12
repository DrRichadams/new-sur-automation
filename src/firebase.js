import React, { useEffect, useState } from "react"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    signInWithEmailAndPassword,
    sendPasswordResetEmail } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBfeiBo2ye8q_HQymsAfqx2rrMH-1FWU4c",
  // authDomain: "sur-automation-3a85e.firebaseapp.com",
  // databaseURL: "https://sur-automation-3a85e-default-rtdb.firebaseio.com",
  // projectId: "sur-automation-3a85e",
  // storageBucket: "sur-automation-3a85e.appspot.com",
  // messagingSenderId: "836594047595",
  // appId: "1:836594047595:web:42cd99b8d2e2e2cfe1ef2e",

  // apiKey: "AIzaSyC-aOG27k9NUTNcrpW2z0VrgUxysTk0SUs",
  // authDomain: "new-sur.firebaseapp.com",
  // projectId: "new-sur",
  // storageBucket: "new-sur.appspot.com",
  // messagingSenderId: "1050020582377",
  // appId: "1:1050020582377:web:fabbfe1edd41cb34a9f178"

  // apiKey: "AIzaSyDhS7SvVBTz02odEvMP10ujhlu383D_MOg",
  // authDomain: "sur-auto1.firebaseapp.com",
  // projectId: "sur-auto1",
  // storageBucket: "sur-auto1.appspot.com",
  // messagingSenderId: "264055341174",
  // appId: "1:264055341174:web:4cada2315a3027e6109f57"

  // apiKey: "AIzaSyC3xo-3BP5IakKyJECUh-oO1mEhh1uz7do",
  // authDomain: "sur-auto2.firebaseapp.com",
  // projectId: "sur-auto2",
  // storageBucket: "sur-auto2.appspot.com",
  // messagingSenderId: "20352713277",
  // appId: "1:20352713277:web:81c51c416639688868a054"

  apiKey: "AIzaSyCOXNJ6c_yTC-ZHSdH3EzS0IIQwkWJHFHw",
  authDomain: "madctoria-primary.firebaseapp.com",
  projectId: "madctoria-primary",
  storageBucket: "madctoria-primary.appspot.com",
  messagingSenderId: "954524882536",
  appId: "1:954524882536:web:4b36e05e16fb147006cddd"
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

export  function forgotPassword(email) {
  return sendPasswordResetEmail(auth, email).then(() => {
    console.log("Successish")
  }).catch(error => console.log("Send error", error))
}

export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState()
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
    return unsub
  }, [])
  return currentUser
}


