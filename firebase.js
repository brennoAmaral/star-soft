// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAmEwPjgBvTJB_mZHRuJrqD9eYfhZtxaw",
  authDomain: "mysticforge-818c9.firebaseapp.com",
  projectId: "mysticforge-818c9",
  storageBucket: "mysticforge-818c9.appspot.com",
  messagingSenderId: "551130536176",
  appId: "1:551130536176:web:88ace7a3ba37b596880a35",
  measurementId: "G-MTJH4F68KY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);