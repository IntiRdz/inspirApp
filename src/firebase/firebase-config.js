import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyChsMFoUUVqkWEXX6eQasGzkBXxFb2qKYs",
    authDomain: "inspira-critic.firebaseapp.com",
    projectId: "inspira-critic",
    storageBucket: "inspira-critic.appspot.com",
    messagingSenderId: "225584033074",
    appId: "1:225584033074:web:ad1e6d69cbf01e22b4bb2b"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}