// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgAWIz7VIbxP6NPezN6f4WolomyQP4YG0",
  authDomain: "react-firebase-auth-inte-ecbad.firebaseapp.com",
  projectId: "react-firebase-auth-inte-ecbad",
  storageBucket: "react-firebase-auth-inte-ecbad.firebasestorage.app",
  messagingSenderId: "254899177768",
  appId: "1:254899177768:web:082059e74f27975df5a81d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

