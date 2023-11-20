import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2fSqX-9FY8ooQs_gLW-a5zxSK-Gdg-JU",
  authDomain: "khminipro-2dba9.firebaseapp.com",
  projectId: "khminipro-2dba9",
  storageBucket: "khminipro-2dba9.appspot.com",
  messagingSenderId: "195788699438",
  appId: "1:195788699438:web:83b4352a90df88d024ecbf",
  measurementId: "G-ZEDWQVRB5X",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
