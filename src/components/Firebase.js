import firebase from "firebase/app";
import "firebase/firestore";


  
  // var firebaseConfig = {
  //   apiKey: 
  //   authDomain: 
  //   projectId: 
  //   storageBucket: 
  //   messagingSenderId: 
  //   appId: 
  // };
  // Initialize Firebase
 
  firebase.initializeApp(firebaseConfig);
  
  const firestore = firebase.firestore();

  export  {
    firestore
  };