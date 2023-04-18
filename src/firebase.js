// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_Fnyo-hmJZ7LHdaxrRpRVLHMbGehzmP4",
  authDomain: "chhavi-ghar.firebaseapp.com",
  projectId: "chhavi-ghar",
  storageBucket: "chhavi-ghar.appspot.com",
  messagingSenderId: "705458966279",
  appId: "1:705458966279:web:3106c7f519607bf2feffa2",
  measurementId: "G-8MEJ9CWL7B"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };