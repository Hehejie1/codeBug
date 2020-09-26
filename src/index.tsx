import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StarBg } from './components/index'
// 引入antd的UI
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'antd/dist/antd.css';
moment.locale('zh-cn');

ReactDOM.render(
  <React.StrictMode>
    <App />
    <StarBg />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();