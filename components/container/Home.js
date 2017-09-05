import React from "react";
import ReactDom from "react-dom";
import Header from './Header';
import Search from './Search';
import Results from './Results';
import Footer from './Footer';


export default class Home extends React.Component{
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
				<div style={{margin: "-10px"}}>
				     <Header  fun={this.selected}/>
				     <Search  fun2={this.search1}/>
				     <Results  jsondata1={this.state.jsondata} />
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
