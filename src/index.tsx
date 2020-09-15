<<<<<<< HEAD
import React from 'react';
=======
import * as React from 'react';
>>>>>>> feat: eslint,router finished
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

<<<<<<< HEAD
=======
// import store from './store'
// import { addToCart } from './actions/cart-actions'
// let unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// })

// store.dispatch(addToCart('Coffee 500gm', 1, 250));
// unsubscribe();


>>>>>>> feat: eslint,router finished
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
