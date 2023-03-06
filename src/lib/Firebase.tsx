// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdtLeBsAUFkqyUyc5Jj4F9zevUjdUQk2M",
  authDomain: "todo-app-25531.firebaseapp.com",
  projectId: "todo-app-25531",
  storageBucket: "todo-app-25531.appspot.com",
  messagingSenderId: "941310629080",
  appId: "1:941310629080:web:08cef8ccfdd83b20b933ad",
};

// Application Firebase
export const firebase = initializeApp(firebaseConfig);

// Initialize le service d'authentification
export const firebaseAuth = getAuth(firebase);
// Initialise le service firestore (la base de données)
export const firebaseDb = getFirestore(firebase);

// Nous pouvons aussi en faire un export par défaut
export default { auth: firebaseAuth, db: firebaseDb };
