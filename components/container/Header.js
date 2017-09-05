import React from 'react';
import ReactDOM from 'react-dom';
import {AppBar, Tabs, Tab} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router,BrowserRouter,Route,Link } from 'react-router-dom';
//import Router from 'react-router/BrowserRouter';
//import Match from 'react-router/Match';
//import Link from 'react-router/Link';

import Home from './Home';

import Favourites from './Favourites';

export default class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    selectedIndex: 0,
  };
  this.select=this.select.bind(this)
  }
  

  select() 
  {
    this.setState({selectedIndex: 1});
    console.log("changed")
    this.props.fun(this.state.selectedIndex)
}
  render()
  {
    return(
      
     
        <AppBar title="Go Places">
        
       <Link to={{ pathname: '/', state: { jsondata1: this.props.data } }}> <button  onClick={this.select} style={{marginRight:10,height:50,width:100,marginTop:12,borderRadius: 10}}>Home</button></Link>
        <Link to={{ pathname: '/Favourites', state: { jsondata2: this.props.data } }}><button  onClick={this.select} style={{marginRight:-10,height:50,width:130,marginTop:12,borderRadius: 10}}>Favourites</button></Link>
     </AppBar>
      
      
        );  
          
  }
}
