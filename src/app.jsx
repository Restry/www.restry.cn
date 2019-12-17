import React from "react";
import ReactDOM from "react-dom";
// import './scss/main.scss';
import {  BrowserRouter as Router } from 'react-router-dom'


import App from './layouts/index'

const Root = () => (
  <Router>
    <App /> 
  </Router>
)



ReactDOM.render(<Root />, document.getElementById("app"));