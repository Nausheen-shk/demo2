import {  useEffect, useState } from "react";

export default function Effect(){

    let[name, setName]=useState("nausheen");
     let[count, setCount]=useState(0);
      let[amount, setAmount]=useState(1000);


useEffect(
    ()=>{
        console.log("useEffect call");
    },[count]
);

return(
    <>
    {name}|{amount}|{count}
    <br></br>
    <button onClick={()=>setName("uzair")}>changename</button>
    <button onClick={()=>setCount(count+1)}>changeCount</button>
   < button onClick={()=>setAmount(2000)}>changeAmount</button>

    </>
)

}