import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiIvGezj0vHj9FMPMYGlJChooCT66Z098",
  authDomain: "react-miniproject-cart.firebaseapp.com",
  projectId: "react-miniproject-cart",
  storageBucket: "react-miniproject-cart.appspot.com",
  messagingSenderId: "975567857804",
  appId: "1:975567857804:web:7777f8ed7486df0b8af3a9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
