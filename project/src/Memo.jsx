import { useMemo, useState } from "react";


export default function Memo(){

    let [name,setName]=useState("nausheen");
    let [count,setCount]=useState("0");

    let getTotal=()=>{
        console.log("calculation start");
        let total=0;
        for(let i=1;i<=1000000000;i++){
            total+=1;
        }
        return total +count;
    }


    let result =useMemo(()=>{
        return getTotal();
     } ,[count]);

     return(
        <>
        {result}| Name:{name} |count:{count}
        <button onClick={()=>setName('uzair')}>changename</button>
         <button onClick={()=>setCount(count +1 )}>increment</button>
        </>
     );
}