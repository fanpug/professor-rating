import firebase from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

import { } from 'firebase/analytics';
import { } from 'firebase/auth';
import { } from 'firebase/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCPt_LrLT0Li6XwB8U2bAREx2EcjF6mc0Q",

    authDomain: "rating-de-profesores.firebaseapp.com",

    projectId: "rating-de-profesores",

    storageBucket: "rating-de-profesores.appspot.com",

    messagingSenderId: "528498119338",

    appId: "1:528498119338:web:4a81f554967ed0369bf6d3"


};


// Initialize Firebase

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export default firebase;