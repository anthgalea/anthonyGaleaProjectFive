import firebase from 'firebase/app';    //firebase
import 'firebase/database'; //firebase database

// copy and pasted from your Firebase Realtime Database
// Your web app's Firebase configuration
//do not paste script tags from firebase config
const config = {
    apiKey: "AIzaSyBrKuDBFAcon5GaFLkuOjEVkuKEDskVZ90",
    authDomain: "personal-journal-c0bd8.firebaseapp.com",
    databaseURL: "https://personal-journal-c0bd8.firebaseio.com",
    projectId: "personal-journal-c0bd8",
    storageBucket: "personal-journal-c0bd8.appspot.com",
    messagingSenderId: "299999700647",
    appId: "1:299999700647:web:d1e2e927ef461924025d82"
};
// Initialize Firebase
firebase.initializeApp(config);


export default firebase;    //export becuase it is a module