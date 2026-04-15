import { useState } from "react";


export default function Form3(){
  let[data,setData]=useState({});
  let[error,setError]=useState({});
  
  

  let handleSubmit =(event)=>{
    event.preventDefault();

  let err={};
  if(!data.name){
    err.name="please enter the name";
  }else if(!data.email){
    
    err.email="please enter the email";
  }else if(!data.Contact){
    
    err.Contact="please enter the contact";
    

  }else if(!data.salary){
   
    err.salary="please enter the salary";
  }else if(!data.resgination){
    
    err.resgination="please enter the resgination";
  }

  setError(err);
  if(Object.keys(err).length===0){
    console.log("form submited",data);
  }
  }

  return(
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">enter name:</label>
        <input type="text"  placeholder="enter the name"id="name" onChange={(event)=>setData({...data,name:event.target.value})}></input>
      {error.name && <span style={{color:"red"}}>{error.name}</span>}
      </div>
      <div>
        <label htmlFor="email">enter email:</label>
        <input type="email"  placeholder="enter the email"id="email"
        onChange={(event)=>setData({...data,email:event.target.value})}></input>
      {error.email && <span style={{color:"red"}}>{error.email}</span>}
      </div>
      <div>
        <label htmlFor="contact">enter contact:</label>
        <input type="number"  placeholder="enter the contact"id="contact"
       onChange={(event)=>setData({...data,Contact:event.target.value})}></input>
      {error.Contact && <span style={{color:"red"}}>{error.Contact}</span>}

      </div>
      <div>
        <label htmlFor="salary">enter salary:</label>
        <input type="number"  placeholder="enter the salary"id="salary"
       onChange={(event)=>setData({...data,salary:event.target.value})}></input>
      {error.salary && <span style={{color:"red"}}>{error.salary}</span>}

      </div>
      <div>
        <label htmlFor="resgination">enter resgination:</label>
        <input type="text"   placeholder="enter the resgination"id="resgination"
        onChange={(event)=>setData({...data,resgination:event.target.value})}></input>
      {error.resgination && <span style={{color:"red"}}>{error.resgination}</span>}

      </div>

      <div>
        <button type="submit" className="btn btn-primary">submit</button>
        <button type="submit"className="btn btn-warning">clear</button>
        
      </div>
   
    
    </form>
        {data && JSON.stringify(data)}

    </>
  )

  }
