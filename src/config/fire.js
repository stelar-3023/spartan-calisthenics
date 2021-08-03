import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbSoss6iWmx6-XHOdoKmoqhvYBtAUel3Q",
  authDomain: "exercise-app-151cd.firebaseapp.com",
  projectId: "exercise-app-151cd",
  storageBucket: "exercise-app-151cd.appspot.com",
  messagingSenderId: "733820858100",
  appId: "1:733820858100:web:60eb1f0c46b7efbb01f8a1",
  measurementId: "G-L00L09GRK6"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

// make auth and firestore references
export const auth = firebase.auth();
export const db = firebase.firestore();

// update firestore settings
// db.settings({ timestampsInSnapshots: true });

export default fire;