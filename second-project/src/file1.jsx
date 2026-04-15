import { useState } from "react";

export default function File1(){
    let [file,setFile]=useState(null);

    let file_upload=(event)=>{
        setFile(event.target.files[0])
        console.log(event.target.files[0].name);
    }


    return(
        <>
        <div>
            <label htmlFor="resume">resume</label>
            <input type="file"id="resume"onChange={file_upload}></input>
            {file &&<h2>{file.name}</h2>}
        </div>
        </>
    )
}