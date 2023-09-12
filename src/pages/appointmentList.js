import {useState, useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore';

import db from '../firebaseConfig';

import "./appointmentList.css";

function AppointmentList() {
    const [appointments,setAppointments] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "appointent"));
            querySnapshot.forEach((doc) => {
                setAppointments((prevState) => [...prevState, doc.data()]);
            });
        }

        fetchData();
        
    }, []);

    return (
        <div className="students-container">
            <h3 className="p-3 text-center">Students who want to learn playing piano</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>School</th>
                        <th>Date Time</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            appointments && appointments.map((appointment,i) =>
                                <tr key={i}>
                                    <td>{appointment.name} {appointment.lastName}</td>
                                    <td>{appointment.email}</td>
                                    <td>{appointment.phone}</td>
                                    <td>{appointment.school}</td>
                                    <td>{appointment.date}</td>
                                </tr>
                                )
                        }
                    </tbody>
            </table>
        </div>
    )
}

export default AppointmentList;