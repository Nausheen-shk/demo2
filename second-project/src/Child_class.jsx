import { Component } from "react";

export default class Child_class extends Component {

    render(){
        return(
            <>
                <h1>display by child component</h1>

                {this.props.user}<br />
                {this.props.email}<br />
            </>
        );
    }
}