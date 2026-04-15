import { useEffect, useState } from "react"


 const User =(props) => {

    let [user,setUser]=useState({});

    let getUser = async () =>{
        await fetch (`https://api.github.com/users/${props.username}`)
        .then(response => response.json())
        .then(response => setUser(response))
        .catch(error => console.error(error));    
    }


    useEffect(()=>{
        getUser();
    },[props.username]
    )

    return(
        <>
        <div className="container">
            <div className="card" style={{width:'18rem'}}>
                <img src={user.avatar_url} className="card-img-top" alt="userimage"/>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Username:&nbsp;{user.login}</li>
                    <li className="list-group-item">Name:&nbsp;{user.name}</li>
                </ul>
                <div className="card-body">
                    <a href={user.html_url}>profile</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default User;