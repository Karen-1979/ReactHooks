import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCyGtKEQ__bkk5K4sll801DSY3jESsd-Bk",
  authDomain: "ninja-mario-e5214.firebaseapp.com",
  databaseURL: "https://ninja-mario-e5214.firebaseio.com",
  projectId: "ninja-mario-e5214",
  storageBucket: "ninja-mario-e5214.appspot.com",
  messagingSenderId: "349417964816",
  appId: "1:349417964816:web:0769b373bbe90c91665195",
  measurementId: "G-Z1N9F5XQLR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 //firebase.analytics();

//firebase.firestore().settings({timestampsInSnapshots:true})

export default firebase