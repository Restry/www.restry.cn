import React from "react";
import ReactDOM from "react-dom";
// import './scss/main.scss';
import { BrowserRouter as Router } from 'react-router-dom'
import store, { StoreProvider } from './store';

import App from './layouts/index'

const Root = () => (
  <Router>
    <StoreProvider initialState={store.initialState} reducer={store.reducer}>
      <App />
    </StoreProvider>
  </Router>
)



ReactDOM.render(<Root />, document.getElementById("app"));