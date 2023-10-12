import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxTYkmmKQMI1D73v_Xd27BXpNT5uPLiUI",
  authDomain: "social-events-birthday-parties.firebaseapp.com",
  projectId: "social-events-birthday-parties",
  storageBucket: "social-events-birthday-parties.appspot.com",
  messagingSenderId: "756192778344",
  appId: "1:756192778344:web:81af9ad7c3bc9905afc3dd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
