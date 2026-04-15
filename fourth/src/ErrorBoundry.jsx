import { Component } from "react";

// erroerboundry class is responsible to handle errors globally in react 
export default class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state={ hasError : false}
    }

    static getDerivedStateFromError(error){
        return{hasError : true}
    }

    ComponentDidCatch(error,info){
        console.log(error,info)
    }


    render(){
        if (this.state.hasError){
            return<h1>something went wrong...</h1>
        }
        return this.props.children;
    }
}