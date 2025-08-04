// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBQpVPB-qoBPy_2Laas-6nVHES0Vb8DtJU",
  authDomain: "college-website-6861f.firebaseapp.com",
  databaseURL: "https://college-website-6861f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "college-website-6861f",
  storageBucket: "college-website-6861f.appspot.com",
  messagingSenderId: "611882438855",
  appId: "1:611882438855:web:40106b1d5edcf18300285a"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
