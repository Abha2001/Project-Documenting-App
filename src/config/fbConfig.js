import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

var firebaseConfig = {
    apiKey: "AIzaSyDDT0LHTQXdwd9gJBDImny1QR0WaHB2TE8",
    authDomain: "projectapp-35428.firebaseapp.com",
    databaseURL: "https://projectapp-35428.firebaseio.com",
    projectId: "projectapp-35428",
    storageBucket: "projectapp-35428.appspot.com",
    messagingSenderId: "471903840431",
    appId: "1:471903840431:web:0d24f14133b293af68cc5a",
    measurementId: "G-NEQEW6R280"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore();

  export default firebase;
