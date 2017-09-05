import React from "react";
import ReactDom from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import { BrowserRouter as Router,IndexRoute,Route,Switch } from 'react-router-dom';
class Parent extends React.Component{
	render()
	{
		return(
			<MuiThemeProvider>
				<Router>
				<App />
				</Router>
				</MuiThemeProvider>
			  );	
					
	}
}
ReactDom.render(<Parent />,document.getElementById('root'));