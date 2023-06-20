// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC24KRpKB1hfXzE1-sHMadESvsl-9IdP8k",
    authDomain: "netflix-clone-182b9.firebaseapp.com",
    projectId: "netflix-clone-182b9",
    storageBucket: "netflix-clone-182b9.appspot.com",
    messagingSenderId: "1097433457832",
    appId: "1:1097433457832:web:aeaaecb35a3f2b57f94e9d",
    measurementId: "G-J05GXDZXNM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {auth};
export default db;
