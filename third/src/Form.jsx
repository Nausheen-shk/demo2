import { useState } from "react";


export default function Form(){
  let[name,setName]=useState("");
  let[email,setEmail]=useState("");

  let handleForm =(event)=>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    
    

  }

  return(
    <>
    <form onSubmit={handleForm}>
      <div>
        <label htmlFor="name">enter name:</label>
        <input type="text" placeholder="enter the name"id="name"></input>
      </div>
      <div>
        <label htmlFor="email">enter email:</label>
        <input type="email"  placeholder="enter the email"id="email" ></input>
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
    <div>
      {name}  {email}
    </div>
    
    </>
  );

}
