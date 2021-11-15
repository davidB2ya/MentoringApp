import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import App from './App';

const rootElement = document.getElementById("root")

render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  rootElement
);
