// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrZiQ5V4KTLeUK0bR_N7_apvS3rjXcEG0",
  authDomain: "noteapp-452a6.firebaseapp.com",
  projectId: "noteapp-452a6",
  storageBucket: "noteapp-452a6.appspot.com",
  messagingSenderId: "89607815211",
  appId: "1:89607815211:web:9b21a43f1d8104fc95aa6e",
  measurementId: "G-X9JBH3RZ7T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
