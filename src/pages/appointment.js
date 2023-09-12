import "./appointment.css";

import AppointmentTimeslot from "./appointmentTimeslot";

import { useState } from "react";

import { useRecoilState} from 'recoil';
import {inputCollection} from './recoil_state';

// School list
const school_list = [
  {
    name: "Ronald McNair Elementary School",
    street: "13881 Hopkins Rd",
    city: "Germantown, MD 20874"
  },
  {
    name: "Lake Senaca Elementary School",
    street: "13600 Wanegarden Dr",
    city: "germantown, MD 20874"
  },
  {
    name: "Waters Landing Elementary School",
    street: "13100 Waters Landing Dr",
    city: "germantown, MD 20874"
  }
];

function Appointment(prep) {
  const [collection, setCollection] = useRecoilState(inputCollection);

  const [inputField, setInputField] = useState({
    am_pm: "AMPM",
    date: new Date().toISOString().substring(0,10),
    school: "Ronald McNair Elementary School"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputField({
      ...inputField,
      [name]: value,
    });
  };

  const updateStateDate = (newDate) =>{
    setInputField({
      ...inputField,
      date: newDate
    })
  }
  const handleSchoolChange =(e) => {
    setCollection({...collection, school: e.target.value});
  }

  return (
    <div className="appointment-wrapper">
      <div className="appointment-title">Choose a day and time</div>
      <div className="appointment-line"></div>

      <div className="appointment-date">
        <label htmlFor="date">Date</label>
        <br />
        <input
          type="date"
          id="date"
          // defaultValue={today}
          name="date"
          value={inputField.date}
          onChange={handleChange}
          required
        />
        {typeof(inputField.date)}
      </div>
      <div className="appointment-time-of-day">
        <p>Time of day</p>

        <input
          onChange={handleChange}
          type="radio"
          id="isMorning"
          name="am_pm"
          value="AM"
          checked={inputField.am_pm === "AM"}
        />
        <label htmlFor="isMorning">Morning</label>

        <input
          onChange={handleChange}
          type="radio"
          id="isAfternoon"
          name="am_pm"
          value="PM"
          checked={inputField.am_pm === "PM"}
        />
        <label htmlFor="isAfternoon">Afternoon</label>
      </div>

      <div className="appointment-school">
        <div style={{ margin: "10px 1px", "font-weight": "bold" }}>
          {inputField.school_list}
        </div>
        <div>{school_list.find(element => element.name === collection.school).street}</div>
        <div>{school_list.find(element => element.name === collection.school).city}</div>
        
        <div className="appointment-school-select">
        <label>
          Pick your favorite school:
          <select name="school" value={collection.school} onChange={handleSchoolChange}>
            <option value="Ronald McNair Elementary School">Ronald McNair Elementary School</option>
            <option vlaue="Lake Senaca Elementary School">Lake Senaca Elementary School</option>
            <option value="Waters Landing Elementary School">Waters Landing Elementary School</option>
          </select>
        </label>
        </div>
      </div>

      <AppointmentTimeslot updateStateDate={updateStateDate} date_am_pm={inputField} />
    </div>
  );
}

export default Appointment;
