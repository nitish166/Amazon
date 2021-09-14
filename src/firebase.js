// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBnA7OpkxCzLI8xD4xDwZH_SExSVzplvDw",
  authDomain: "challenge-44d4f.firebaseapp.com",
  projectId: "challenge-44d4f",
  storageBucket: "challenge-44d4f.appspot.com",
  messagingSenderId: "125082241969",
  appId: "1:125082241969:web:2c817243edc5ecb6678b90",
  measurementId: "G-CK5YZ31272",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
