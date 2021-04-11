import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
// import App from './App';
import './index.css';
import Routes from './Routes';

const App = () => {
  return(
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
