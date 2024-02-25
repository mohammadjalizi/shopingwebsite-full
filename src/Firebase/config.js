// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEVcqGh2PhdPKwvRdhLtQMjJ9KPPuHBd8",
  authDomain: "shopingwebsite-full.firebaseapp.com",
  projectId: "shopingwebsite-full",
  storageBucket: "shopingwebsite-full.appspot.com",
  messagingSenderId: "390180692312",
  appId: "1:390180692312:web:75a700c1b74c8ba477852d",
  measurementId: "G-5TCYXG6514"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);