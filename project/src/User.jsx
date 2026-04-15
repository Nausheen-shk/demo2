import { useContext } from "react";
import { context } from "./Context";

export default function User(){
    let name = useContext(context);
    return(

        <>
        <h1>{name}</h1>
        </>
    )

}