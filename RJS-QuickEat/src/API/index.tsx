import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

var FirebaseConfig = {
  apiKey: "AIzaSyBQEffGziv8NpeKVex9-4hOvs8_apEzAEo",
  authDomain: "myportfolio-dev.firebaseapp.com",
  databaseURL: "https://myportfolio-dev.firebaseio.com",
  projectId: "myportfolio-dev",
  storageBucket: "myportfolio-dev.appspot.com",
  messagingSenderId: "1056684797659",
  appId: "1:1056684797659:web:71b3ff8bdf10da5b59e6fe",
  measurementId: "G-BG88VXLJN9",
}

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(FirebaseConfig)
}

export default firebase
