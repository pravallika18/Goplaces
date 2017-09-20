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
        let a;

        if(obj.photos){
        a="https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=100&photoreference="+obj.photos[0].photo_reference+"&key=AIzaSyDjQVzBMXAdwCe47SppuLvG0MPNtqwdwXg";
        }
        else{
        a=obj.icon;
        }

                console.log(obj.photos)
              return <InstanceResults key={obj.id} name={obj.name} Address={obj.vicinity} img={a} />;
    }) 
  	
    return(

     <div style={styles.root}>
     <GridList
      cellHeight={300}
      style={styles.gridList} cols={3} padding={20}>
      {results}
    </GridList>  
     </div>

        );     
  }
}