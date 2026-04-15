export default function Child_fun(props){

    let{ user,email }=props;
    return(
        <>
        {user}<br></br>
        {email}
        </>
    );
}