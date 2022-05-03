import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPMHUGLu6kaNV2pacQ1wfHeilQml7MTX8",
    authDomain: "periodic-617e9.firebaseapp.com",
    projectId: "periodic-617e9",
    storageBucket: "periodic-617e9.appspot.com",
    messagingSenderId: "524175497017",
    appId: "1:524175497017:web:2c8b0c1ef3b722c0f7bae8",
    measurementId: "G-L3MV3QRW6S"
  };

let app;
if(firebase.apps.length === 0){
   app = firebase.initializeApp(firebaseConfig)
}else{
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();


export {db,auth};