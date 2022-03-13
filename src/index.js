import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from './App';
import './index.css';

//ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="referral_history" element={< Referral />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
