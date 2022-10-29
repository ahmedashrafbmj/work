// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKkD7ucqwNqt6B5QUz7ft3sdMRexsqUnc",
  authDomain: "boilerplate-d92b1.firebaseapp.com",
  projectId: "boilerplate-d92b1",
  storageBucket: "boilerplate-d92b1.appspot.com",
  messagingSenderId: "438884765648",
  appId: "1:438884765648:web:21d35aef418c4a9e9bb3d5",
  measurementId: "G-KNWC08L8JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;