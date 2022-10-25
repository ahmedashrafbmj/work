// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdBLO8GnMdihQCrdlLCQ7SHjLLcv6Q1jg",
    authDomain: "calculator-123-8f996.firebaseapp.com",
    projectId: "calculator-123-8f996",
    storageBucket: "calculator-123-8f996.appspot.com",
    messagingSenderId: "152267867271",
    appId: "1:152267867271:web:01183cc88178258ee7a422"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;