import React from 'react';
import Router from './router/router'
import './App.scss';
import Tab from './components/common/module/Tab/index'

function App() {
  return (
    <div className="hh-box">
      <Router />
      <Tab 
        option={[{key:'/index',name:'首页'},{key:'/user/index',name:'空间'}]}
      />
    </div>
  );
}

export default App;