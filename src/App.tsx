import React from 'react';
import Router from './router/router'
import './App.scss';
import './assert/style/csshake.css'


const Sharke = React.createContext("sharke")

function App() {
  return (
    <div className="hh-box">
      <Sharke.Provider value="1">
        <div className="hh-container">
          <Router />
        </div>
      </Sharke.Provider>
      
    </div>
  );
}
export default App;