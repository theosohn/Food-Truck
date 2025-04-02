// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxY80wuGexFiZ5Ch_yfUF-xjaTpTtjFPE",
  authDomain: "food-truck-58238.firebaseapp.com",
  projectId: "food-truck-58238",
  storageBucket: "food-truck-58238.firebasestorage.app",
  messagingSenderId: "222172707722",
  appId: "1:222172707722:web:e1c80bf7b264365f816673",
  measurementId: "G-QXDRTBJ8ZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore, app};