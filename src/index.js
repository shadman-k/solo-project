import React from 'react';
import ReactDom from 'react-dom';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App.jsx';

render(
  <BrowserRouter >
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)

console.log('Listening on PORT: 8080')