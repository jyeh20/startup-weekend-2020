import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDsX_p-hSvbUX4RIjo_njqNkLqQuK5sCWY",
    authDomain: "startup-weekend-2020.firebaseapp.com",
    databaseURL: "https://startup-weekend-2020.firebaseio.com",
    projectId: "startup-weekend-2020",
    storageBucket: "startup-weekend-2020.appspot.com",
    messagingSenderId: "39898065194",
    appId: "1:39898065194:web:0c2387c5cf11cad58e1653",
    measurementId: "G-8KCDMNC370"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;