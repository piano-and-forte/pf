import { redirect } from "react-router-dom";
import "./volunteer.css";

import { useState } from "react";
import {doc, setDoc} from 'firebase/firestore';
import db from '../firebaseConfig';

export default function Volunteer() {
  const [defaultTextareaValue, setDefaultTextareaValue] = useState(
    "Please put your special requirements here! "
  );
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    shared: true,
    day: "",
    time: "",
    activity: "",
    specialRequirements: "",
  });
  const timeAttending = [
    "3:00PM~3:30PM",
    "3:30PM~4:00PM",
    "4:00PM~4:30PM",
    "4:30PM~5:00PM",
  ];
  const activities = ["Piano mentoring", "Activity 1", "Activity 2"];
  const dayAttending = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputFields({
      ...inputFields,
      [name]: value,
    });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    // create a document
    const document = doc(db, "volunteers", inputFields.email);
    await setDoc(document, inputFields, {merge: true})
            .then(() => {
              alert("Data have been successfully saved!")
            })
            .catch((error) => {
              alert(error)
            })
  }
  return (
    <div className="volunteer-container">
      <p>
        Piano and Forte is seeking volunteers to serve out communit. Fill in the
        information below to indicate how you would like to become involved.
      </p>
      <div className="item">
        <label htmlFor="name">
          Name<span>*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={inputFields.name}
          onChange={onChange}
        />
      </div>
      <div className="item">
        <label htmlFor="email">
          Email Address<span>*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={inputFields.email}
          onChange={onChange}
        />
      </div>
      <div className="item">
        <label htmlFor="phone">
          Phone<span>*</span>
        </label>
        <input
          id="phone"
          type="text"
          name="phone"
          value={inputFields.phone}
          onChange={onChange}
        />
      </div>
      <div className="item">
        <label htmlFor="street">
          Street<span>*</span>
        </label>
        <input
          type="text"
          id="street"
          name="street"
          value={inputFields.street}
          onChange={onChange}
        />
      </div>
      <div className="item">
        <label htmlFor="city">
          City<span>*</span>
        </label>
        <input
          id="city"
          type="text"
          name="city"
          value={inputFields.city}
          onChange={onChange}
        />
      </div>
      <div className="item">
        <label htmlFor="state">
          State<span>*</span>
        </label>
        <input
          id="state"
          type="text"
          name="state"
          value={inputFields.state}
          onChange={onChange}
        />
      </div>
      <div className="item">
        <label htmlFor="zip">
          Zip<span>*</span>
        </label>
        <input
          id="zip"
          type="text"
          name="zip"
          value={inputFields.zip}
          onChange={onChange}
        />
      </div>

      <div className="shared-info">
        <p>
          Include my contact information on lists distributed to other
          volunteers?
        </p>
        <div>
          <input
            type="radio"
            name="shared"
            value="yes"
            id="yes"
            onChange={onChange}
          />
          <label htmlFor="yes">Yes</label>
        </div>
        <div>
          <input
            type="radio"
            name="shared"
            value="no"
            id="no"
            onChange={onChange}
          />
          <label htmlFor="no">No</label>
        </div>
      </div>

      <div className="day-time-activity">
        <div className="days-attending">
          <p>Days Attending</p>
          {dayAttending.map((item) => {
            return (
              <div>
                <input
                  type="radio"
                  id={item}
                  value={item}
                  name="day"
                  onChange={onChange}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            );
          })}
        </div>
        <div className="time-attending">
          <p>Time Attending</p>
          {timeAttending.map((item) => {
            return (
              <div>
                <input
                  type="radio"
                  id={item}
                  value={item}
                  name="time"
                  onChange={onChange}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            );
          })}
        </div>
        <div className="activity-attending">
          <p>Activity Attending</p>
          {activities.map((item) => {
            return (
              <div>
                <input
                  type="radio"
                  value={item}
                  id={item}
                  name="activity"
                  onChange={onChange}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="special-requirements">
        <p>Special requirements:</p>
        <textarea
          onFocus={() => {
            setDefaultTextareaValue("");
            console.log("reset default textarea value");
          }}
          name="specialRequirements"
          value={inputFields.specialRequirements}
          onChange={onChange}
          rows="4"
          cols="80"
          placeholder={defaultTextareaValue}
        />
      </div>

      <div className="volunteer-submit">
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>

    </div>
  );
}
