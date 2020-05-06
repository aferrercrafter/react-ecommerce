import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyDBH34QZjm4ReFuS0F9oFqiJiC8rj5NJzw",
    authDomain: "fire-crwn-db.firebaseapp.com",
    databaseURL: "https://fire-crwn-db.firebaseio.com",
    projectId: "fire-crwn-db",
    storageBucket: "fire-crwn-db.appspot.com",
    messagingSenderId: "972351075012",
    appId: "1:972351075012:web:2087e2189c4e79f73bcf91",
    measurementId: "G-03P8W1N8SB"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;