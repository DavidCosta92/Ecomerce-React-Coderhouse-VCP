// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQJLFyR_k4u3NJHj0pYM_GahTtogCgcpg",
  authDomain: "ecommerce-coderhouse-vcp.firebaseapp.com",
  projectId: "ecommerce-coderhouse-vcp",
  storageBucket: "ecommerce-coderhouse-vcp.appspot.com",
  messagingSenderId: "842132108530",
  appId: "1:842132108530:web:98c0dc2219eba4a43ecc6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app)
export default db