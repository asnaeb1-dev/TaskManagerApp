import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './AppData/UI/Screen/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app'

const root = ReactDOM.createRoot(document.getElementById('root'));
const firebaseConfig = {
  apiKey: "AIzaSyBIssmxOtQIRq59opgep7hKbOFQdqYp2NA",
  authDomain: "taskmanager-f829e.firebaseapp.com",
  projectId: "taskmanager-f829e",
  storageBucket: "taskmanager-f829e.appspot.com",
  messagingSenderId: "355625676933",
  appId: "1:355625676933:web:9f4df039d7e2450c0639ec"
};

const app = initializeApp(firebaseConfig)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
