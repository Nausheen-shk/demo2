import { Component } from "react";
import Child_class from "./Child_class";

export default class Class_props extends Component{

    constructor(props){
        super(props);
        this.state={username:"nausheen",email:"nausheenshaikh@gmail.com"}
    }


    // username='nausheen';
    // student={r_no:1,branch:science}

    // getmsg=()=>{

    // }

    getChange=()=>{
        this.setState({
            username:this.state.username="uzair",
             email:this.state.email="umair",
        
        });
    }
    

    render(){
        return(
            <>
            <button onClick={()=>this.getChange()}>click-me</button>
            <Child_class
            /* child_class // user={this.username} */
           /* // stud={JSON.stringify(this.student)} */
            // msg={ this.getmsg}
            user={this.state.username}
            email={this.state.email}/>
            </>
        );
    }
}
































