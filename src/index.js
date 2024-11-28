import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}