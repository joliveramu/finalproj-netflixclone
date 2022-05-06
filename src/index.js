import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as HashRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import MyAccount from './components/MyAccount';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
      <Route path="/finalproj-netflixclone" element={<App />} />
      <Route path="/finalproj-netflixclone/login" exact={true} element={<Login />} />
      <Route path="/finalproj-netflixclone/register" exact={true} element={<Register />} />
      <Route path="/finalproj-netflixclone/dashboard"  exact={true} element={<Dashboard />} />
      <Route path="/finalproj-netflixclone/myaccount"  exact={true} element={<MyAccount />} />
    </Routes>
  </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
