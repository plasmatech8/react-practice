import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCnGJDqq4mPmSRobuxuRemuyeC3_64voas",
  authDomain: "marioplan-52689.firebaseapp.com",
  databaseURL: "https://marioplan-52689.firebaseio.com",
  projectId: "marioplan-52689",
  storageBucket: "marioplan-52689.appspot.com",
  messagingSenderId: "423214097707",
  appId: "1:423214097707:web:849028ab44f81f3789d16e",
  measurementId: "G-RSEVX6PLXB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;