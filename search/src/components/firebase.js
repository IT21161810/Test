// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl4Ugn0i5ddIRf4h7BNeWsdHVzwFzfPDE",
  authDomain: "blogapp-7c1eb.firebaseapp.com",
  projectId: "blogapp-7c1eb",
  storageBucket: "blogapp-7c1eb.appspot.com",
  messagingSenderId: "281108490042",
  appId: "1:281108490042:web:ba603d361ac858851b5203"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
