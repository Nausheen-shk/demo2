import { useState } from "react";

export default function file3() {
    const  [email,setEmail] =useState("");
     const  [name,setName] =useState("");
      const [password,setPassword] =useState("");


      const loginhandle=()=>{
        alert("login sucessfully!")

         console.log(email);     // user input email
    console.log(name);      // user input name
    console.log(password);  // user input password

      };
      <br/> 
    

    


return (
    <div>
      <label>Email</label>
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <label>Name</label>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <label>Password</label>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={loginhandle}>Login</button>
    </div>
  );
}


