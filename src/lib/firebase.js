// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIFmYMfU4QytQIxYeEdm27I9myhyfe-lU",
  authDomain: "mbgku-9b754.firebaseapp.com",
  projectId: "mbgku-9b754",
  storageBucket: "mbgku-9b754.firebasestorage.app",
  messagingSenderId: "349632283569",
  appId: "1:349632283569:web:cf966efc6c4ff44405f390",
  measurementId: "G-L6GP6VC7MX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
