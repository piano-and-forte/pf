import "./studentContact.css";

import { useState } from "react";

import { useRecoilState} from 'recoil';
import {inputCollection} from './recoil_state';
import {doc, setDoc} from 'firebase/firestore';
import db from '../firebaseConfig';

function StudentContact(prop) {

  const [collection, setCollection] = useRecoilState(inputCollection);

  const [placeholderStyle, setPlaceholderStyle] = useState({
    name: "placeholder",
    email: "placeholder",
    phone: "placeholder"
  });

  const [student_n_e_p, setStudent_n_e_p] = useState({
    name: "",
    email: "",
    phone: ""
  })

  const onChange = (e) => {
    const {name, value } = e.target;

    setCollection({
      ...collection,
      [name]: value
    })

    setStudent_n_e_p({
      ...student_n_e_p,
      [name]: value
    })
  }
  const onBlur = (e) => {
    const name = e.target.name;
    if (student_n_e_p[name]) {
      setPlaceholderStyle({
        ...placeholderStyle,
        [name]: "input-placeholder-onblur"
      });
    } else {
      setPlaceholderStyle({
        ...placeholderStyle,
        [name]: "placeholder"
      });
    }
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();

    // create a document
    const document = doc(db, "appointent", collection.email);
    await setDoc(document, collection, {merge: true})
            .then(() => {
              alert("Data have been successfully saved!")
            })
            .catch((error) => {
              alert(error)
            })
  }
  return (
    <div className="student-contact-container">
      <h4>Your contact information:</h4>

      <div className="input-container">
        <input
          type="text"
          onChange={onChange}
          onBlur={onBlur}
          name="name"
          value={student_n_e_p.name}
        />
        <span className={placeholderStyle.name}>Name</span>
      </div>
      <div className="input-container">
        <input type="email" value={student_n_e_p.email} name="email" onChange={onChange} onBlur={onBlur}/>
        <span className={placeholderStyle.email}>Email address</span>
      </div>

      <div className="input-container">
        <input type="text" value={student_n_e_p.phone} name="phone" onChange={onChange} onBlur={onBlur}/>
        <span className={placeholderStyle.phone}>Phone number</span>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default StudentContact;
