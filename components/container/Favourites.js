import React from 'react';
import ReactDOM from 'react-dom';
import Favresults from './Favresults';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

export default class Favourites extends React.Component{

 
  constructor(props){

    super(props);
    console.log("Inside Favourites Constructor"+this.props.jsondata1);
  }
  render()
  {
        const styles = {
              root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
              },
            gridList: {
              width: 1200,
              height: 600,
              overflowY: 'auto',
            },
        };
      var results = this.props.jsondata2.map(function(obj){
                
              return <InstanceResults key={obj.id} name={obj.name} Address={obj.vicinity} img={obj.icon} />;
    }) 
  	
    return(

     <div style={styles.root}>
     <h2>Favourites...</h2>
     <GridList
      cellHeight={300}
      style={styles.gridList} cols={3}>
      {results}
    </GridList>  
     </div>
        );  
          
  }

  
}