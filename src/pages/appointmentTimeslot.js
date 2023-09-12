import "./appointmentTimeslot.css";
import { Link } from "react-router-dom";

import { useRecoilState } from "recoil";
import { inputCollection } from "./recoil_state";

function AppointmentTimeslot(prop) {
  const [collection, setCollection] = useRecoilState(inputCollection);

  const onChange = (e) => {
    setCollection({ ...collection, date: e.target.value });
  };

  const data = [
    {
      PM: ["3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"],
      AM: ["9:00 AM", "9:30 AM", "10:00 AM"],
    },
    {
      PM: ["2:00 PM", "3:30 PM", "4:00 PM"],
      AM: ["8:00 AM", "9:30 AM", "10:00 AM"],
    },
    {
      PM: ["1:00 PM", "3:30 PM", "4:00 PM"],
      AM: ["7:00 AM", "9:30 AM", "10:00 AM"],
    },
  ];

  const getDayOfWeek = (date) => {
    const dayOfWeek = new Date(date).getDay();

    return isNaN(dayOfWeek)
      ? null
      : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeek];
  };

  
  const showAm =
    prop.date_am_pm.am_pm === "AM" || prop.date_am_pm.am_pm === "AMPM";
  const showPm =
    prop.date_am_pm.am_pm === "PM" || prop.date_am_pm.am_pm === "AMPM";


  let firstDate = new Date(prop.date_am_pm.date);
  const oneDayInMill = 60*60*24*1000;
  let secondDate = new Date(firstDate.getTime() + oneDayInMill);
  let thirdDate = new Date(secondDate.getTime() + oneDayInMill);

  const setPreviousDate = () => {
    const currentDate = new Date(prop.date_am_pm.date);
    prop.updateStateDate((new Date(currentDate.getTime() - oneDayInMill).toISOString().substring(0,10)));
  }

  const setNextDate = () => {
    const currentDate = new Date(prop.date_am_pm.date);
    prop.updateStateDate((new Date(currentDate.getTime() +  oneDayInMill).toISOString().substring(0,10)));
  }


  return (
    <div className="appointment-timeslot-container">
      <div className="appointment-timeslot-previous" onClick={setPreviousDate}>&laquo; Previous</div>
      <div className="appointment-timeslot-firstdate">
        {getDayOfWeek(firstDate)}{" "}
        {firstDate.toISOString().substring(5,10)}
      </div>
      <div className="appointment-timeslot-seconddate">
        {getDayOfWeek(secondDate)} {secondDate.toISOString().substring(5,10)}
      </div>
      <div className="appointment-timeslot-thirddate">
        {getDayOfWeek(thirdDate)} {thirdDate.toISOString().substring(5,10)}
      </div>
      <div className="appointment-timeslot-next" onClick={setNextDate}>Next &raquo;</div>
      {showAm && (
        <div className="right-align appointment-timeslot-firstdate-am">
          {data[0].AM.map((element, index) => {
            const uniqueId = firstDate.toISOString().substring(0,10) + " " + element;
            return (
              <div className="each-timeslot" key={index}>
                <input
                  type="radio"
                  onChange={onChange}
                  name="timeDay"
                  value={uniqueId}
                  checked={collection.date === uniqueId}
                  id={uniqueId}
                />
                <label htmlFor={uniqueId}>{element}</label>
              </div>
            );
          })}
        </div>
      )}
      {showPm && (
        <div className="right-align appointment-timeslot-firstdate-pm">
          {data[0].PM.map((element, index) => {
            const uniqueId = firstDate.toISOString().substring(0,10) + " " + element;
            return (
              <div className="each-timeslot" key={index}>
                <input
                  type="radio"
                  onChange={onChange}
                  name="timeDay"
                  value={uniqueId}
                  checked={collection.date === uniqueId}
                  id={uniqueId}
                />
                <label htmlFor={uniqueId}>{element}</label>
              </div>
            );
          })}
        </div>
      )}
      {showAm && (
        <div className="right-align appointment-timeslot-seconddate-am">
          {data[1].AM.map((element, index) => {
            const uniqueId = secondDate.toISOString().substring(0,10) + " " + element;
            return (
              <div className="each-timeslot" key={index}>
                <input
                  type="radio"
                  onChange={onChange}
                  name="timeDay"
                  value={uniqueId}
                  checked={collection.date === uniqueId}
                  id={uniqueId}
                />
                <label htmlFor={uniqueId}>{element}</label>
              </div>
            );
          })}
        </div>
      )}
      {showPm && (
        <div className="left-align appointment-timeslot-seconddate-pm">
          {data[1].PM.map((element, index) => {
            const uniqueId = secondDate.toISOString().substring(0,10) + " " + element;
            return (
              <div className="each-timeslot" key={index}>
                <input
                  type="radio"
                  onChange={onChange}
                  name="timeDay"
                  value={uniqueId}
                  checked={collection.date === uniqueId}
                  id={uniqueId}
                />
                <label htmlFor={uniqueId}>{element}</label>
              </div>
            );
          })}
        </div>
      )}
      {showAm && (
        <div className="left-align appointment-timeslot-thirddate-am">
          {data[2].AM.map((element, index) => {
            const uniqueId = thirdDate.toISOString().substring(0,10) + " " + element;
            return (
              <div className="each-timeslot" key={index}>
                <input
                  type="radio"
                  onChange={onChange}
                  name="timeDay"
                  value={uniqueId}
                  checked={collection.date === uniqueId}
                  id={uniqueId}
                />
                <label htmlFor={uniqueId}>{element}</label>
              </div>
            );
          })}
        </div>
      )}
      {showPm && (
        <div className="left-align appointment-timeslot-thirddate-pm">
          {data[2].PM.map((element, index) => {
            const uniqueId = thirdDate.toISOString().substring(0,10) + " " + element;
            return (
              <div className="each-timeslot" key={index}>
                <input
                  type="radio"
                  onChange={onChange}
                  name="timeDay"
                  value={uniqueId}
                  checked={collection.date === uniqueId}
                  id={uniqueId}
                />
                <label htmlFor={uniqueId}>{element}</label>
              </div>
            );
          })}
        </div>
      )}

      <Link
        to="/studentContact"
        className="appointment-timeslot-next-button-link"
      >
        <button className="appointment-timeslot-next-button">Next</button>
      </Link>

      
    </div>
  );
}


export default AppointmentTimeslot;
