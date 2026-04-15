import { Button } from "bootstrap";
import { useState } from "react";

export default function ErrorDemo(){
    let [name,setName]=useState(null);


    let change=()=>{
        console.log("hello");
        //used to handle an error
        try{
            //responsible to hold the risky code
            console.log(name.length);
        }catch(error){
            //responsible to handle and the catch the error
            console.error(error);
        }
        console.log("welcome");
    }

    return(
        <>
        <button onClick={()=>change()}>ok</button>
        </>
    )
}
