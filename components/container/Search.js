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
    this.state={
      jdata:null
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
            <button style={{cursor:'pointer',borderRadius: 2}} onClick={this.search}>Search</button>
          
      </div>
      
        );  
          
  }
  search(){
 var l=this.refs.input.getValue();
 var t=this.refs.input1.getValue();
 console.log(l,t)
 axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=12.934533,77.626579 &radius=500&type='+t+'&keyword='+l+'&key=AIzaSyDjQVzBMXAdwCe47SppuLvG0MPNtqwdwXg') 
      .then((response) => {
        this.setState({
          jdata  : response.data
        });
        console.log(this.state.jdata)
        let jsondata = JSON.stringify(this.state.jdata);
        let encoding = 'utf8';
        console.log("Test 1"+jsondata);
        this.props.fun2(this.state.jdata)


      })
      .catch( (error) => {
        console.log(error);
      });  

  }
}
