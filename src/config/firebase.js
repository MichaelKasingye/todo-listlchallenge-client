import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   // databaseURL: process.env.REACT_APP_PUBLIC_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBrozEa7Mbjibq-IgE35c5iafOKGjOBHqI",
  authDomain: "amakkahomes.firebaseapp.com",
  projectId: "amakkahomes",
  storageBucket: "amakkahomes.appspot.com",
  messagingSenderId: "234527074860",
  appId: "1:234527074860:web:66f481edbaf646b1d77f89",
  measurementId: "G-T2PDB6C3GD"
};

export const app = initializeApp(firebaseConfig);
