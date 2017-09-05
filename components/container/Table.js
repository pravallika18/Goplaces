import React, {Component} from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class Table1 extends Component {
  state = {
    selected: [1],
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  render() {
      let jsondata=[];
     axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=12.934533,77.626579 &radius=500&type=restaurant&keyword=koramangala&key=AIzaSyDjQVzBMXAdwCe47SppuLvG0MPNtqwdwXg') 
      .then((response) => {
        this.setState({
          jdata  : response.data
        });
        console.log(this.state.jdata.results)
        let jsondata = JSON.stringify(this.state.jdata);
      })
      .catch( (error) => {
        console.log(error);
      }); 
      var results= [
      {
         "geometry" : {
            "location" : {
               "lat" : 12.932072,
               "lng" : 77.62283099999999
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 12.9334822302915,
                  "lng" : 77.6242343802915
               },
               "southwest" : {
                  "lat" : 12.9307842697085,
                  "lng" : 77.62153641970849
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "7467f17c018211bb734e267bb41359a83f168e05",
         "name" : "Anjappar Chettinad Restaurant",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 1000,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/106581145398869503652/photos\"\u003eAnjappar Chettinad Restaurant\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAEsWfdRFqi2AzSxgkSTqNoljg_1LI_IFunOsqUCeMllhpf4WEKb6IT39sKkR8qbFhJ7El1CULU5Rvp3Qli3q-BQknibyIC-EKgvz239q_X7WD99SMBku8_gRKyaLkknIJEhCQbf-NuJnZtANK9LmVJjteGhQ1dH6ohxkGJqyag8xK1T-5C6Am8A",
               "width" : 1500
            }
         ],
         "place_id" : "ChIJS_vfCFsUrjsR3wfsGx7SBqE",
         "rating" : 4,
         "reference" : "CmRSAAAAz2FsPJdjX0t7UftYf35OBhdR02Xk2ICZwlzGDiYuXV4VxXd-__LQ0hp8vFQg1OWvQY3Gezc8ZWYbeDtgDeT9RF2eRH7YuJvxVMg2w8kPFu-jFvEMRPIrgOi5_GCTpAGYEhCRPaj8xiu3vkCSsldDQOnCGhQ2NdGoTn_txAYJk3AhAxxpkt4rFw",
         "scope" : "GOOGLE",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "#4th B Block, 17th Main Road, Near BDA Complex Koramangala, Bengaluru"
      }];
      var obj={};
      obj['name']=results[0].name;
      obj['img']=results[0].icon;
      obj['address']=results[0].vicinity;
      console.log(results[0].name)
     console.log(results[0].icon)
      console.log(results[0].vicinity)
      console.log(obj) 

    return (
      <Table onRowSelection={this.handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>name</TableHeaderColumn>
            <TableHeaderColumn>icon</TableHeaderColumn>
            <TableHeaderColumn>Address</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow selected={this.isSelected(0)}>
            <TableRowColumn>{obj.name}</TableRowColumn>
            <TableRowColumn><img src={obj.img} /></TableRowColumn>
            <TableRowColumn>{obj.address}</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}
