import firebase from "firebase";
import "firebase/auth";
import 'firebase/firebase'
import "firebase/storage";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNOeYWU8uj3VaxSV76NB_R3BANq2Egvvs",
  authDomain: "fir-327ba.firebaseapp.com",
  projectId: "fir-327ba",
  storageBucket: "fir-327ba.appspot.com",
  messagingSenderId: "656057065612",
  appId: "1:656057065612:web:9ad63509739f94e53cdba9",
  measurementId: "G-L7Z6NFFH3T"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);