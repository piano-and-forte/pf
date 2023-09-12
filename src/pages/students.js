import {useState, useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore';

import db from '../firebaseConfig';

import "./students.css";

function Students() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                setUsers((prevState) => [...prevState, doc.data()]);
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
                        <th>Gender</th>
                        <th>School</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((user,i) =>
                                <tr key={i}>
                                    <td>{user.firstName} {user.lastName}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.school}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                </tr>
                                )
                        }
                    </tbody>
            </table>
        </div>
    )
}

export default Students;