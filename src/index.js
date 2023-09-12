import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Headers from './pages/header';
import Home from './pages/home'
import AppointmentList from './pages/appointmentList';
import NoPage from './pages/noPage';
import Appointment from './pages/appointment';
import SignIn from './pages/signIn';
// import SignUp from './pages/signUp';
import LogOut from './pages/logOut';
import SendPasswordReset from './pages/passwordReset';
import CreateUser from './pages/createUser';
import StudentContact from './pages/studentContact';
import Volunteer from './pages/volunteers';

import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Headers />}>
          <Route index element={<Home />} />
          <Route path="appointmentList" element={<AppointmentList />} />
          <Route path="pf" element={<Home />} />
          <Route path="appointment" element={<Appointment/>} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="logOut" element={<LogOut/>} />
          <Route path="reset" element={<SendPasswordReset/>} />
          <Route path="createUser" element={<CreateUser />} />
          <Route path="volunteer" element={<Volunteer/>} />
          <Route path="studentContact" element={<StudentContact />} />
          <Route path="home" element={<Home/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  // </React.StrictMode>
  /**
   * I figured it out after reading about it on twitter. 
   * Apparently React version 18 renders useEffect twice during test 
   * mode but not in production mode, which explains why it did not render twice 
   * when I deployed the site online. I also found out that you can bypass 
   * this or temporarily disable this by removing the React.strictMode tags 
   * in the index.js file.
   */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
