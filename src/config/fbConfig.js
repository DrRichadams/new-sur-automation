import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHy_v9-WUdnPKGIoRiw3qWUWW2BhFfodY",
  authDomain: "net-ninja-marioplan-4879d.firebaseapp.com",
  projectId: "net-ninja-marioplan-4879d",
  storageBucket: "net-ninja-marioplan-4879d.appspot.com",
  messagingSenderId: "1031344387873",
  appId: "1:1031344387873:web:bacdb740eaedf0cc707060",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
