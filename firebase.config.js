// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBK4Sl0fGNMulC5BqWtIH9oBaCa852d53A",
  authDomain: "crud-xm.firebaseapp.com",
  databaseURL: "https://crud-xm-default-rtdb.firebaseio.com",
  projectId: "crud-xm",
  storageBucket: "crud-xm.firebasestorage.app",
  messagingSenderId: "760921465233",
  appId: "1:760921465233:web:1ba78a45d176ca5de47a30"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
