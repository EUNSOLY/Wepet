import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLJ_o65U55oM_qzRmOgLexv7bUSqF49gU",
  authDomain: "wepet-2c5d8.firebaseapp.com",
  projectId: "wepet-2c5d8",
  storageBucket: "wepet-2c5d8.appspot.com",
  messagingSenderId: "397953644846",
  appId: "1:397953644846:web:57aae619c3c4149a61e2bf",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
