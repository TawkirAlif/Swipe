import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWg7_vXY26Djf6ytlOa8pRfAN5u3zj3iY",
  authDomain: "swipe4z.firebaseapp.com",
  projectId: "swipe4z",
  storageBucket: "swipe4z.appspot.com",
  messagingSenderId: "1015998078316",
  appId: "1:1015998078316:web:80c93f33c5c435d9eaa749",
  measurementId: "G-X79K93N9CL",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
