// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV3-Haeuw2ejyO3cW7730-N8JMQ0xu1MY",
  authDomain: "clone-11327.firebaseapp.com",
  projectId: "clone-11327",
  storageBucket: "clone-11327.appspot.com",
  messagingSenderId: "1009456026515",
  appId: "1:1009456026515:web:7ae78b6d0c988856f7ce66",
  measurementId: "G-SKZ246WJWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();