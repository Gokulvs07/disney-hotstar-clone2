import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCVDMTfaNzfoawXMScOD-OO5zQAXCEv3Vw",
    authDomain: "disneyplus-clone-1fef4.firebaseapp.com",
    projectId: "disneyplus-clone-1fef4",
    storageBucket: "disneyplus-clone-1fef4.appspot.com",
    messagingSenderId: "506897050883",
    appId: "1:506897050883:web:d09fd59ea9387278620d36",
    measurementId: "G-CE5DLLBZX5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();


  export{auth, provider, storage};
  export default db;