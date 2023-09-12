
import './passwordReset.css';

import {getAuth, sendPasswordResetEmail} from 'firebase/auth';
import {useState} from 'react';

function SendPasswordReset(prop) {

    const auth = getAuth();

    const [email, setEmail] = useState("");

    const updateEamil = (event) => {
        setEmail(event.target.value);
    }

    const reset = () => {
        sendPasswordResetEmail(auth, email);
        alert("Password reset email has been successfully sent!")
    }
    return (
        <div className='reset-container'>
            <h3>Enter your email here: </h3>
            <input type="email" onChange={updateEamil} className='reset-email-field' type="email"/>
            <button onClick={reset} className="reset-button">Reset password</button>
        </div>
    )
}

export default SendPasswordReset;