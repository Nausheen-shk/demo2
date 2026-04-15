import { useState } from "react";

export default function Counter(){


    let [count,setCount]=useState(0);

    let increment =() =>{
        setCount(count+1);
    }

     let decrement =() =>{
        setCount(count-1);
    }

    return(
        <>
        {count}<br></br>
        <button onClick={increment}>+</button>
         <button onClick={decrement}>-</button>
        </>
    )
}