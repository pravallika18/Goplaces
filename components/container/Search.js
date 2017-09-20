import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Cell} from 'react-inline-grid';
import TextField from 'material-ui/TextField';
import axios from 'axios';
var fs = require("fs");

export default class Search extends React.Component{
  constructor(){
    super()
    this.search=this.search.bind(this)
     this.params=this.params.bind(this)
    this.state={
      jdata:null,
      l:null,
      t:null
    }
  }
   componentDidUpdate(prevProps, prevState){
    
    if (this.state.l !==prevState.l && this.state.t !== prevState.t) {
   console.log("component did updated search");
  
  }
  

}
  shouldComponentUpdate(nextProps,nextState){
  console.log("should component update")
  console.log("this state....."+this.state.l)
  console.log("next state ......"+nextState.l)
  if(this.state.l !== nextState.l || this.state.t !== nextState.t)
  {
    console.log(true)
    return true;
  }
  return false;
  
}
componentWillUpdate(nextProps,nextState){
   console.log("component will updated search");
   if(this.state.l !== nextState.l || this.state.t !== nextState.t)
   {
     console.log("component will updated search in stmt");
     this.search(nextState.l,nextState.t);
   }
}
  render()
  {
    return(
      
         <div style={{backgroundColor:'#595959',marginBottom: "10px"}}>
            <TextField ref="input"
              id="text-field-controlled" hintText="Enter Location" style={{marginRight:20,marginLeft:20,width:600}}
            />
            <TextField ref="input1"
              id="text-field-controlled" hintText="Enter Type" style={{marginRight:20,width:600}}
            />
            <button style={{cursor:'pointer',borderRadius: 2}} onClick={this.params}>Search</button>
          
      </div>
      
        );  
          
  }
  params(){
    console.log("setting values")
    this.setState({l:this.refs.input.getValue()});
    this.setState({t:this.refs.input1.getValue()});
    console.log("-------"+this.state.l)
    console.log("-------"+this.state.t)
  }
  search(a,b){
 // var l=this.refs.input.getValue();
 // var t=this.refs.input1.getValue();
 // console.log(l,t)
 console.log('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=12.972442,77.626579 &radius=500&type='+b+'&keyword='+a+'&key=AIzaSyDjQVzBMXAdwCe47SppuLvG0MPNtqwdwXg');
 axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=12.9716,77.5946 &radius=500&type='+a+'&keyword='+b+'&key=AIzaSyDjQVzBMXAdwCe47SppuLvG0MPNtqwdwXg') 
      .then((response) => {
        this.setState({
          jdata  : response.data
        });
        console.log(this.state.jdata)
        this.props.fun2(this.state.jdata)
        

      })
      .catch( (error) => {
        console.log(error);
      });  

  }
}
