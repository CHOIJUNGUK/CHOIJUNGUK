import React from 'react';
import ReactDOM1 from 'react-dom/client';
// const ReactDOM1 = requre('react-dom/client');
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 현위치 public 
// ./ : 현위치, ../ : 상위 , 하위폴더로 이동 : /하위폴더/이미지.png
// 현위치 : react-test/src 안에
// 구글로고 : react-test/public 폴더 안
// ../react-test/public:/react-test/src/'googlelogo_color_272x92dp.png';
import logo from './img/googlelogo_color_272x92dp.png'; 
const root = ReactDOM1.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
     <div classname="react">
     <header class name="react-t">
      <img src={logo} classname="react-logo" alt="logo"/>
      <p>
      Edit <code>src/index.js</code> and save to reload.
      </p>
      <a
       className="react-link"
       href="https://www.google.co.kr/"
       target="_blank"
       rel="noopener noreferrer"
      >
      </a>
      </header>
      </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
