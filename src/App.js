import logo from './logo.svg';

import {useState} from "react";

import './App.css';

import db from './firebaseConfig';

import { collection, addDoc } from "firebase/firestore"; 

import Confirm from './pages/confirm';

function App() {

  const [user, setUser] = useState({firstName:"", lastName:"", gender:"", school:"", phone:"", email:""});

  const [display, setDisplay] = useState("none");

  const confirm2Go = async (proceed) => {
    if(proceed) {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        school: user.school,
        phone: user.phone,
        email: user.email
      });
      window.alert("The data has been saved to the database!")
    } catch (e) {
      window.alert("Error: " + e);
    }
  } else {
    window.alert("Your request was canceled");
  }
  }

  const handleChange = (e) => {
    setUser({...user,[e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisplay("block");
  }

  return (
    <div className="App">
      <div className="app-header">
        <h3>Mission: Playing piano at school</h3>
      </div>

      <div className="student">
        <div className="title"><h3>Student Registration</h3></div>
        <input className="input-first-name" type="text" id="firstName" value={user.firstName} name="firstName" onChange={handleChange}/>
        <label className="label-first-name" htmlFor="firstName">First Name</label>
        
        <input className="input-last-name" type="text" id="lastName" value={user.lastName} name="lastName" onChange={handleChange}/>
        <label className="label-last-name" htmlFor="lastName">Last Name</label>

        <div className="gender-container" name="gender" onChange={handleChange}>
        <input className="input-female" type="radio" id="female" name="gender" value="femal"/>
        <label className="label-female" htmlFor="female">Female</label>
        <input className="input-male" type="radio" id="male" name="gender" value="male"/>
        <label className="label-male" htmlFor="male">Male</label>
        </div>
        
        <input className="input-school" type="text" id="school" value={user.school} name="school" onChange={handleChange}/>
        <label className="label-school" htmlFor="school">School</label>
        
        <input className="input-phone" type="text" id="phone" value={user.phone} name="phone" onChange={handleChange}/>
        <label className="label-phone" htmlFor="phone">Phone Number</label>
        
        <input className="input-email" type="email" id="email" value={user.email} name="email" onChange={handleChange}/>
        <label className="label-email" htmlFor="email">Email</label>

        <input type="button" id="submit" value="Submit" onClick={handleSubmit}/>
     
        <Confirm display={display} confirm2Go={confirm2Go} setDisplay={setDisplay}/>
        
      </div>
    </div>
  );
}

export default App;
