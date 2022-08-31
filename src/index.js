import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Functions
import reportWebVitals from './reportWebVitals';
//Components
import App from './components/App';
import ConfirmCode from './components/ConfirmCode';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
//Styles
import './styles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/confirm-code' element={<ConfirmCode />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
