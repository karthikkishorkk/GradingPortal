// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrTIW13e8W6mctseaZND_mPK5EYEIjuyI",
  authDomain: "grading-portal-14831.firebaseapp.com",
  projectId: "grading-portal-14831",
  storageBucket: "grading-portal-14831.firebasestorage.app",
  messagingSenderId: "14983672374",
  appId: "1:14983672374:web:de48ba130c88e130e75e97",
  measurementId: "G-Z5ZZSDKD2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);