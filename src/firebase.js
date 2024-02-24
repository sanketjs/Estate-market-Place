// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

  authDomain: "mern-estate-baec9.firebaseapp.com",

  projectId: "mern-estate-baec9",

  storageBucket: "mern-estate-baec9.appspot.com",

  messagingSenderId: "440390366353",

  appId: "1:440390366353:web:b910aef1e86cb0a7f1fb30"

};


// Initialize Firebase

 export const app = initializeApp(firebaseConfig);