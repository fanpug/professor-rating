// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPt_LrLT0Li6XwB8U2bAREx2EcjF6mc0Q",

    authDomain: "rating-de-profesores.firebaseapp.com",

    projectId: "rating-de-profesores",

    storageBucket: "rating-de-profesores.appspot.com",

    messagingSenderId: "528498119338",

    appId: "1:528498119338:web:4a81f554967ed0369bf6d3"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const emailAuthProvider = new firebase.auth.EmailAuthProvider();

// Firestore exports
export const db = firebase.firestore();
