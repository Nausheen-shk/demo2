import { useState } from "react";


function user(){

    return(
        <>
        <h1>user component</h1>
        </>
    )

}



function Admin(){
    
    return(
        <>
        <h1>Admin component</h1>
        </>
    )

}


export default function rendering1(){

    let [type,settype]=useState("");

    }

export default function rendering1(){

    let operator=()=>{
        if(type == "admin"){
            return<Admin/>
        }else if(type=="user"){
            return<user/>

        }else{
            return<h1>select type</h1>
        }
        
    }
}
return
    
       




