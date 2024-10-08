// src/firebase/firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/firestore';

// Your Firebase configuration object (replace with your actual values)


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnxxNEnhDnVa99lKZHb69JOwFNFumqVl0",
    authDomain: "petvitals-11efa.firebaseapp.com",
    projectId: "petvitals-11efa",
    storageBucket: "petvitals-11efa.appspot.com",
    messagingSenderId: "772322205984",
    appId: "1:772322205984:web:d8ce72abf37576787f3745",
    measurementId: "G-YHSBLGPFY9"
  };
// Export Firestore database
const db = firebase.firestore();

export { db };
