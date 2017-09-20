import React from "react";
import ReactDom from "react-dom";
import Header from './container/Header';
import Search from './container/Search';
import Results from './container/Results';
import Favourites from './container/Favourites'
import Footer from './container/Footer';

//import Router from 'react-router/BrowserRouter';
//import Match from 'react-router/Match';
//import Link from 'react-router/Link';

export default class App extends React.Component{
	constructor(props){
		super(props)
		this.state={
			index:0,
			jsondata:[]
		}
	this.selected=this.selected.bind(this)
	this.search1=this.search1.bind(this)
		}
	
	
	render()
	{
		
		return(
				<div style={{marginTop: "0px",marginBottom: "-10px",marginLeft: "-10px",marginRight: "-10px"}}>
				     <Search  fun2={this.search1}/>
	                      <Favourites jsondata2={this.state.jsondata} />
				     <Footer />
				 
				</div>
			  );	
					
	}

	search1(data1){
		var a=[];
		//console.log("json data retreived")
		for(let i=0;i<data1.results.length;i++)
		{
		  a.push(data1.results[i])
		}
		//console.log("Test 2"+a)
		this.setState({jsondata:a})
		//console.log("Rerendering triggered")
	}

	selected(index1){
		//console.log("ok")
		this.setState({index:index1})
		//console.log(this.state.index)
	}
}
