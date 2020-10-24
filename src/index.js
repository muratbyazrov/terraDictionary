import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

reportWebVitals();