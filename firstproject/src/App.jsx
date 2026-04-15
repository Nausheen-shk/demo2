 import { Component } from "react";
import Demo from"./Demo";


import { useState } from "react";

import StateDemo from "./StateDemo";
import Counter from "./Counter";
import Rendering from "./Rendering";
import Rendering from "./Rendering1";




class App extends Component{
  name ="nausheen";
  amount= 20000;
  price =10.01;

  date = new Date();

  emp ={emp_id:1,emp_name:"uzair"};

  list=[1,2,3,4,5];

  getmessage(){
    return"welcome";
  }

  render(){
    return<>
    <div>
{/* {this.name}<br/>
      {this.amount}<br/>
      {this.price}<br/>
      {this.date.toString()}<br/>
      {this.emp.emp_id} {this.emp.emp_name}<br/>
      {this.getmessage()}<br/>
      {this.list.join(" ")}<br/> */}
      {/* {<Demo/>} */}
      <Rendering1/>    
        {/* <StateDemo /> */}
      {/* <Counter/> */}



    </div>
    {/* <h1>hello from the class component</h1> */}
    </>
    
     
    }
  }
  export default App;
