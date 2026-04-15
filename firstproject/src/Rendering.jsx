import { useState } from "react";

export default function rendering(){



     let [islogged,setlogged]=useState(false);

     let logic = ()=>{
        if (islogged){
            return <h1>login successfully</h1>
        }else{
            return<h1>somethind went wrong...</h1>
        }
     }

     return(
        <>
        {logic()}<br></br>
        <button onClick={()=>setlogged(true)}>login</button>
        <div>
            {/* { by ternary operator} */}
            {/* { islogged ?(
                <h1>welcome</h1>
            ) :(
                <h1>good bye</h1>
            )
             } */}
        </div>

        {/* { by condiontional rendering operator} */}
        <div>
            { islogged && <h1> welcome to ITVEDANT</h1>}
        </div>


        </>
     )
}