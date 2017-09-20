import React from "react";
import ReactDom from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import App2 from './App2';

import {browserHistory, Route, Router, IndexRoute}  from 'react-router';

import Header from './container/Header';
import Search from './container/Search';
import Results from './container/Results';
import Favourites from './container/Favourites'
import Footer from './container/Footer';
import ComponentNotFound from './container/Not'
class Parent extends React.Component{
	render()
	{
		return(
			<MuiThemeProvider>
			<div>
				<Header />
				
				 {this.props.children}
				</div>
		   </MuiThemeProvider>
			  );			
	}
}
ReactDom.render(<Router history={browserHistory}>
                <Route path="/" component={Parent} > 
               <IndexRoute component={App} /> 
               <Route path="/Home" component={App}/>
                <Route path="/Favourites" component={App2}/>
                <Route path='*' component={ComponentNotFound} /> 
                </Route>         
              </Router>,document.getElementById('root'));