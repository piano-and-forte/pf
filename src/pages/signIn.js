import { Link } from "react-router-dom";
import "./signIn.css";

import { useState, useEffect } from "react";

// import Google Firebase auth
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

import {displayLogout} from './recoil_state';
import {useSetRecoilState} from 'recoil';

function SignIn(prop) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisplayed, setIsDisplayed] = useState(false);

  // recoil state
  const setDisplayLogout =useSetRecoilState(displayLogout);

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const updatePassword = (event) => {
    setPassword(event.target.value);
  };
  const login = () => {
    //   Firevbase authentication
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setDisplayLogout(true);
      })
      .catch((error) => {
        // console.log(error.message);
      
        setIsDisplayed(true);
      });
  };
  return (
    <div className="sign-in-container">
      {isDisplayed && (
        <div className="wrong-username-or-password">
          Incorrect username or password.{" "}
          <button onClick={() => setIsDisplayed(false)}>&#x2715;</button>
        </div>
      )}
      <input
        type="text"
        onChange={updateEmail}
        placeholder="Email Address"
        className="login-input"
      />
      <input
        type="password"
        onChange={updatePassword}
        placeholder="password"
        className="login-input"
      />
      <div className="login-button" onClick={login}>
        Login
      </div>
      <div className="login-with-google-button">Login with Google</div>
      <div>
        <Link to="/reset">Forgot Password</Link>
      </div>
      <div>
        Don't have an account? <Link to="/createUser">Regiser</Link> now
      </div>
    </div>
  );
}

export default SignIn;

// useEffect, the Effect Hook lets you perform side effects in function component
// useEffect, similar to componentDidMount and componentDidUpdate
