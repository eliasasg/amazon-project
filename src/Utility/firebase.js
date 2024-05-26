// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApTVg6eTNRM2tNdbspTFJb9TA1j5jxeNs",
    authDomain: "clone-ca49e.firebaseapp.com",
    projectId: "clone-ca49e",
    storageBucket: "clone-ca49e.appspot.com",
    messagingSenderId: "924952557480",
    appId: "1:924952557480:web:b97b34b28405f724390f9d"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db = app.firestore()