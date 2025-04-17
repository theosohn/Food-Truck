// Import the functions you need from the SDKs you need
import { initializeApp } from "./node_modules/firebase/app";
import { getAnalytics } from "./node_modules/firebase/analytics";
import { getFirestore } from "./node_modules/firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk24chmv8-KeD0x0LQ6PejMb_fUh2GXCQ",
  authDomain: "food-truck-tutorial.firebaseapp.com",
  projectId: "food-truck-tutorial",
  storageBucket: "food-truck-tutorial.firebasestorage.app",
  messagingSenderId: "214235816526",
  appId: "1:214235816526:web:47951c672780221330d91f",
  measurementId: "G-96CM42GHMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore, app};