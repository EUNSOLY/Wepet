import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDLJ_o65U55oM_qzRmOgLexv7bUSqF49gU",
  authDomain: "wepet-2c5d8.firebaseapp.com",
  projectId: "wepet-2c5d8",
  storageBucket: "wepet-2c5d8.appspot.com",
  messagingSenderId: "397953644846",
  appId: "1:397953644846:web:e45defd98f0811d961e2bf",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
