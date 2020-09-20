import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StarBg } from './components/index'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <StarBg
      id="hh-backgroun-star"
      config="particles/config-1.json"
      style={{
        width: "100vw",
        height: "100vh",
        opacity: "0.5"
      }}
      className="hh-backgroun-star"
    />  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();