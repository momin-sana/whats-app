// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZg4f-bc7v5tqp_5H-lSGN8kVzuJEonyo",
    authDomain: "chat-app-b1a2a.firebaseapp.com",
    projectId: "chat-app-b1a2a",
    storageBucket: "chat-app-b1a2a.appspot.com",
    messagingSenderId: "54985912252",
    appId: "1:54985912252:web:34f754f4c34e9b2850c5b9",
    measurementId: "G-PF53G4897J"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const projectStorage = firebase.storage();

export { auth, provider, db, projectStorage };