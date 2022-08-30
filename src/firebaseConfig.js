// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYymnZbC8CFMujLOBgEDuN4lT51XQXwK4",
  authDomain: "v-c-p-cb5cb.firebaseapp.com",
  projectId: "v-c-p-cb5cb",
  storageBucket: "v-c-p-cb5cb.appspot.com",
  messagingSenderId: "1044724429515",
  appId: "1:1044724429515:web:cdc0bc43a831c980cba14e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app)
export default db