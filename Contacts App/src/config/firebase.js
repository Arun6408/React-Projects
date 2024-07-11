// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB19p4JBkG0wLSCevA8rN6Ve4J7gTQ3EMU",
  authDomain: "contact-react-project5.firebaseapp.com",
  projectId: "contact-react-project5",
  storageBucket: "contact-react-project5.appspot.com",
  messagingSenderId: "1009958485901",
  appId: "1:1009958485901:web:4cdd5426198286725ec7c4",
  measurementId: "G-9B5LKENNBB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);