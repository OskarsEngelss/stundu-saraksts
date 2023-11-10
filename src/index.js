import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.js";
import "./global.css";

const noDom = document.getElementById("root");

const root = ReactDOM.createRoot(noDom);

root.render(<App />);