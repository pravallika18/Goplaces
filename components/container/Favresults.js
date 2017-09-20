import React from 'react';
import ReactDOM from 'react-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


export default class InstanceResults extends React.Component{
  constructor(props){
    super(props);
  }
  
  render()
  {
    let a="https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=100&photoreference="+this.props.reff+"&key=AIzaSyDjQVzBMXAdwCe47SppuLvG0MPNtqwdwXg"
    return(
      
        <GridTile
          key={this.props.name}
          title={this.props.name}
          subtitle={<span>by <b>{this.props.Address}</b></span>}
          actionIcon={<button  style={{borderRadius: 10}}>save</button>}>
          <img src={a} style={{width:400,height:300}}/>
        </GridTile>
      
        );  

  
          
  }
  }
