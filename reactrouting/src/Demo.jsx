import { useLocation } from "react-router-dom";


export default function Demo(){


    let location= useLocation();

    let name = location.state?.name;


    return(
        <>
        {/* {location.pathname} */}
        {name}
        </>
    )
}