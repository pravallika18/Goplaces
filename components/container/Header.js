import React from 'react';
import ReactDOM from 'react-dom';
import {AppBar, Tabs, Tab} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';

import Home from './Home';

import Favourites from './Favourites';

export default class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    selectedIndex: 0,
  };
  
  }
  render()
  {
    return(
        <AppBar title="Go Places" style={{width:"1522" , marginTop: "-10px",marginRight: "-20px",marginLeft: "-10px"}}>
       <Link to='/Home'> <button  onClick={this.select} style={{marginRight:10,height:50,width:100,marginTop:12,borderRadius: 10}}>Home</button></Link>
        <Link to='/Favourites'><button  onClick={this.select} style={{marginRight:-10,height:50,width:130,marginTop:12,borderRadius: 10,color: 'green'}}>Favourites</button></Link>
     </AppBar>
        );  
          
  }
}
