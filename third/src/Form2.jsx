import { useState } from "react";


export default function Form2(){
  let[name,setName]=useState("");
  let[email,setEmail]=useState("");
   let[Contact,setContact]=useState("");
    let[salary,setSalary]=useState("");
     let[resgination,setResgination]=useState("");
  

  let handleForm =(event)=>{
    event.preventDefault();

   alert("submit succeesfully");
    

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
        <label htmlFor="contact">enter contact:</label>
        <input type="number" value={Contact}  placeholder="enter the contact"id="contact"
        onChange={(event)=>setContact(event.target.value)} ></input>

      </div>
      <div>
        <label htmlFor="salary">enter salary:</label>
        <input type="number" value={salary}  placeholder="enter the salary"id="salary"
        onChange={(event)=>setSalary(event.target.value)} ></input>

      </div>
      <div>
        <label htmlFor="resgination">enter resgination:</label>
        <input type="text" value={resgination}  placeholder="enter the resgination"id="resgination"
        onChange={(event)=>setResgination(event.target.value)} ></input>

      </div>

      <div>
        <button type="submit">submit</button>
      </div>
    </form>
    <div>
      {name}  {email}   {Contact}  {salary}    {resgination}
    </div>
    
    </>
  )

}
