import React from 'react';
import ReactDOM1 from 'react-dom/client';
// const ReactDOM1 = requre('react-dom/client');
import './index.css';
import App1 from './App';
import reportWebVitals from './reportWebVitals';
import App2 from './Test';
import App3 from './App3.js';
// 현위치 public 
// ./ : 현위치, ../ : 상위 , 하위폴더로 이동 : /하위폴더/이미지.png
// 현위치 : react-test/src 안에
// 구글로고 : react-test/public 폴더 안
// ../react-test/public:/react-test/src/'googlelogo_color_272x92dp.png';
import logo from './img/googlelogo_color_272x92dp.png'; 
const root = ReactDOM1.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App1 />
    <App2 />
    <App3 />
     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
