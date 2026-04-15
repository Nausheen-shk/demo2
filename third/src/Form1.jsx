import { useState } from "react";


export default function Form1(){
  let[name,setName]=useState("");
  let[email,setEmail]=useState("");

  let handleForm =(event)=>{
    event.preventDefault();

   alert("submit suceesfully");
    

  }

  return(
    <>
    <form onSubmit={handleForm}>
      <div>
        <label htmlFor="name">enter name:</label>
        <input type="text" value={name} placeholder="enter the name"id="name" onChange={(event)=>setName(event.target.value)}></input>
      </div>
      <div>
        <label htmlFor="email">enter email:</label>
        <input type="email" value={email}  placeholder="enter the email"id="email"
        onChange={(event)=>setEmail(event.target.value)} ></input>
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
