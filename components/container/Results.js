import React from 'react';
import ReactDOM from 'react-dom';
import InstanceResults from './InstanceResults';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

export default class Results extends React.Component{

 
  constructor(props){

    super(props);
    console.log("Inside Results Constructor"+this.props.jsondata1);
    // this.state={
    //   result:[]
    // }
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
      var results =this.props.jsondata1.map(function(obj){
                
              return <InstanceResults key={obj.id} name={obj.name} Address={obj.vicinity} img={obj.icon} />;
    }) 
  	
    return(
     <div style={styles.root}>
     <GridList
      cellHeight={300}
      style={styles.gridList} cols={3}>
     
      {results}
    </GridList>  
     </div>
        );  
          
  }

  
}