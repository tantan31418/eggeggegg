import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCSC2nEfwwzReaEHPdbyOOTMK4bLjIBv6Q",
    authDomain: "eggeggegg-c72a9.firebaseapp.com",
    projectId: "eggeggegg-c72a9",
    storageBucket: "eggeggegg-c72a9.appspot.com",
    messagingSenderId: "267941754340",
    appId: "1:267941754340:web:1ffb3b431b7b09ef3443f1",
    measurementId: "G-FRQ81MCCRW"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}
export const auth = firebase.auth;
export const firestore = firebase.firestore;


export function signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return auth().signInWithPopup(provider);
}

export function signOutApp(){
    return auth().signOut();
}