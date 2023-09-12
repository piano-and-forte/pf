import "./createUser.css";

import { useState } from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import "../../node_modules/font-awesome/css/font-awesome.min.css";

function CreateUser(prep) {
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;

    setError((prev) => {
      const stateObj = { ...prev, [name]: "" }; // Computed property name

      switch (name) {
        case "email":
          if (!value) {
            stateObj[name] = "Please enter Email";
          } else if (!/\S+@\S+\.\S+/.test(value)) {
            stateObj[name] = "Email is invalid";
          }
          break;
        case "password":
          if (!value) {
            stateObj[name] = "Please enter password";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password doesn't match";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match";
          }
          break;

        default:
          break;
      }
      return stateObj;
    });
  };

  const handleSubmit = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, input.email, input.password)
      .then((userCredential) => {
        // Signed in
        alert("You've been successfully registered");
      })
      .catch((error) => {
        // Error handling
        alert(error.message);
      });
  };

  return (
    <div className="create-user-container">
      <h1>SIGN UP</h1>

      <div className="signup-icon">
        <i className="fa fa-user-circle"></i>
      </div>
      <div className="registration-input">
        <label htmlFor="email" className="registration-label">
          <i className="fa fa-envelope" id="registration-icon"></i>
        </label>
        <input
          onChange={onInputChange}
          onBlur={validateInput}
          name="email"
          id="email"
          value={input.email}
          className="input-field"
          type="email"
          placeholder="Email Address"
        />
      </div>
      {error.email && <span className="err">{error.email}</span>}
      <div className="registration-input">
        <label htmlFor="password" className="registration-label">
          <i className="fa fa-unlock-alt" id="registration-icon"></i>
        </label>
        <input
          onChange={onInputChange}
          onBlur={validateInput}
          name="password"
          id="password"
          value={input.password}
          className="input-field"
          type="password"
          placeholder="Password"
        />
      </div>
      {error.password && <span className="err">{error.password}</span>}
      <div className="registration-input">
        <label htmlFor="confirm-password" className="registration-label">
          <i className="fa fa-unlock-alt" id="registration-icon"></i>
        </label>
        <input
          onChange={onInputChange}
          onBlur={validateInput}
          name="confirmPassword"
          value={input.confirmPassword}
          className="input-field"
          type="password"
          placeholder="Confirmed Password"
        />
      </div>
      {error.confirmPassword && (
        <span className="err">{error.confirmPassword}</span>
      )}
      <button onClick={handleSubmit} className="create-button">
        Register
      </button>
    </div>
  );
}

export default CreateUser;
