import React, {Component,useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App.js';
import  './Components/App.css';
import "./Components/Header.css";
import "./Components/Resume.css";
import {BrowserRouter as BR} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BR>
    <App />
    </BR>
  </React.StrictMode>,
  document.getElementById('root')
);

