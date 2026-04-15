import { Component } from "react";
// class component

export default class StateDemo extends Component{

    constructor(props){
        super(props);
        this.state={name:"nausheen"};
    }



    change=() =>{
        this.setState({name :"uzair"}); 
    }



    render(){
        return(
            <>
            {this.state.name}<br/>
            <button onClick={this.change}>changename</button>
            </>
        )
    }
}