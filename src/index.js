import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import * as firebase from 'firebase';
import 'firebase/firestore';
//import * as serviceWorker from './serviceWorker';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA5pl-GwwK9bOvQKWmitK-VxPrXaSXYl6c",
  authDomain: "cart-17351.firebaseapp.com",
  projectId: "cart-17351",
  storageBucket: "cart-17351.appspot.com",
  messagingSenderId: "245325868288",
  appId: "1:245325868288:web:7cfb89dbde770caf2597e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


