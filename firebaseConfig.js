import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPt_LrLT0Li6XwB8U2bAREx2EcjF6mc0Q",

    authDomain: "rating-de-profesores.firebaseapp.com",

    projectId: "rating-de-profesores",

    storageBucket: "rating-de-profesores.appspot.com",

    messagingSenderId: "528498119338",

    appId: "1:528498119338:web:4a81f554967ed0369bf6d3"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);