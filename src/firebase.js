import firebase from "firebase";
import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
import "firebase/firestore";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs6ldrbe6TBCQVHREq8yukPFrEo6CNlQo",
  authDomain: "disney-plus-clone-1147a.firebaseapp.com",
  projectId: "disney-plus-clone-1147a",
  storageBucket: "disney-plus-clone-1147a.appspot.com",
  messagingSenderId: "1087690603205",
  appId: "1:1087690603205:web:d1af739670405069a5ceac",
  measurementId: "G-FGY050S764",
};

const App = initializeApp(firebaseConfig);
export const db = App.firestore();
export const auth = firebase.auth();
