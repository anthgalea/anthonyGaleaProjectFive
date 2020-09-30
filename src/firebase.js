import firebase from 'firebase/app';  
import 'firebase/database'; 

const config = {
    apiKey: "AIzaSyBrKuDBFAcon5GaFLkuOjEVkuKEDskVZ90",
    authDomain: "personal-journal-c0bd8.firebaseapp.com",
    databaseURL: "https://personal-journal-c0bd8.firebaseio.com",
    projectId: "personal-journal-c0bd8",
    storageBucket: "personal-journal-c0bd8.appspot.com",
    messagingSenderId: "299999700647",
    appId: "1:299999700647:web:d1e2e927ef461924025d82"
};

firebase.initializeApp(config);

export default firebase;