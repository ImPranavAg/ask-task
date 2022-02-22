// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDgOTWM9kdP5qaDbdQTKFRoYT3n9a-xVEE",
    authDomain: "asktask-8830-39.firebaseapp.com",
    projectId: "asktask-8830-39",
    storageBucket: "asktask-8830-39.appspot.com",
    messagingSenderId: "362618451365",
    appId: "1:362618451365:web:6f83f501e9a11a9944644c",
    measurementId: "G-85LP4P981F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
