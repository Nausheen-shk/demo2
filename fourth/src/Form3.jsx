import { useState } from "react";
import { useRef } from "react";

export default function Form3() {
  let name = useRef();
  let email = useRef();
  let contact = useRef(); // fixed (small letter)
  let [error,setError]=useState({});

  let handleSubmit = (data) => {
    data.preventDefault();

    let n=name.current.value;
     let e=email.current.value;
     let c=contact.current.value;
     let err={}

     if(n==""){
        err.name="please enter a name";
     }  else if(e==""){
        err.email="please enter a email";
     }else if(c==""){
        err.contact="please enter a contact";
     }else if(c.length!=10){
        err.contact="please enter a valid number contact";
     }

     setError(err);
     if(Object.keys  (err) .length ===0 ){
        alert("submit sucessfully");
     }
  }

  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">enter name:</label>
          <input
            type="text"
            ref={name}
            placeholder="enter the name"
            id="name"
          />
          {error.name && <span style={{color:"red"}}>{error.name}</span>}
        </div>

        <div>
          <label htmlFor="email">enter email:</label>
          <input
            type="email"
            ref={email}
            placeholder="enter the email"
            id="email"
          />
          {error.email && <span style={{color:"red"}}>{error.email}</span>}
        </div>

        <div>
          <label htmlFor="contact">enter contact:</label>
          <input
            type="number"
            ref={contact}
            placeholder="enter the contact"
            id="contact"
          />
          {error.contact && <span style={{color:"red"}}>{error.contact}</span>}
        </div>

        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  )
}