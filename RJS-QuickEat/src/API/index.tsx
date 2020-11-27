import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

var FirebaseConfig = {
  apiKey: "AIzaSyCZ6n1Q4pqjFY7vv7iPkErsz7umuYdHirE",
  authDomain: "easy-service-dc8a5.firebaseapp.com",
  databaseURL: "https://easy-service-dc8a5.firebaseio.com",
  projectId: "easy-service-dc8a5",
  storageBucket: "easy-service-dc8a5.appspot.com",
  messagingSenderId: "404550704994",
  appId: "1:404550704994:web:50be66126ec8d24d4ed63b",
  measurementId: "G-S6W8Q0335H",
}

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(FirebaseConfig)
}

export default firebase
