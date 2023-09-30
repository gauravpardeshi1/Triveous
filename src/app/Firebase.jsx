

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLA5xTVKt7v0ggxwrREl7y6sSoC1nmHo8",
  authDomain: "triveous-1b439.firebaseapp.com",
  projectId: "triveous-1b439",
  storageBucket: "triveous-1b439.appspot.com",
  messagingSenderId: "894953154302",
  appId: "1:894953154302:web:dc2c4c0f337251b3f4e7af",
  measurementId: "G-DVH3QRHFNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app)
export default function (){ return <>(Nothiing is here  !)</>}