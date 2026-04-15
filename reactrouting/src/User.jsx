import { useNavigate } from "react-router-dom";


export default function User(){

    let navigate= useNavigate();

    let user={id:111,name:"naussheen",contact:98765432};

    let demo =()=>{
        navigate('/demo',{
            state :{name:"nausheen"}
        })

        

        

    }

return(
    <>
    <button onClick={()=>demo()}>getdemo</button>
    {JSON.stringify(user)}
    </>
)
}