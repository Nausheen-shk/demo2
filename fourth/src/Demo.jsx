import { useState } from "react";


export default function Demo(){
    let[name,setName]=useState(null);

    return(
        <>
        {name.length}
        </>
    )
}