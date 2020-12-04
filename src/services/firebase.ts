import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


const config = {
    apiKey: process.env.REACT_APP_API_API_KEY,
    authDomain: process.env.REACT_APP_API_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_API_DATABASE_URL,
    projectId: process.env.REACT_APP_API_PROJECT_ID,
    storageBucket: process.env.REACT_APP_API_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_API_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_API_APP_ID,
    measurementId: process.env.REACT_APP_API_MEASURREMENT_ID
}

firebase.initializeApp(config);
// firebase.analytics();

const databaseRef = firebase.database().ref();

export const recommendation = databaseRef.child("recommendation");
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;