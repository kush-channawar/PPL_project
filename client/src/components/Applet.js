import React, {Component, Fragment} from 'react';


import {saveAs} from "file-saver";
import './Applet.css';
import SideBars from './SideBars';
import './styles.css';
import Dashboard from './Dashboard';
import './styling.css';
import { Table } from 'reactstrap';
import axios from "axios";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class Applet extends Component {
 
      
state = {
 pname : "",
  address:"",
  age:"",
  email:"",
  sr : "",
  quantity:"",
  item :"",
  price:"",
  sr1:"",
  quantity1:"",
  item1 :"",
  price1:"",

}

handleChange  = ({target : { value, name}})=>  {
  this.setState({[name]: value})
}

myFunctions() {
  document.getElementById("myTable").deleteRow(0);

}
createDownloadPdf = () => {

  axios.post('http://localhost:5000/create-pdf', this.state)
  .then(() => axios.get('http://localhost:5000/fetch-pdf', {responseType : 'blob'}))
  .then((res) => {
    const pdfBlob = new Blob([res.data], {type : ' application/pdf' });

    saveAs(pdfBlob, 'newPdf.pdf');
  } );
}
  render(){
    return  <Fragment>
      <SideBars/>
      <Container>
       
       <body className ="body">
       <main className="content">
         <div  />
         <Container maxWidth="lg" className="container">
           <Grid container spacing={3} >
            
           <Grid item xs={12} md={4} lg={3} >
               <Paper className="paper fixedHeight" style={{ backgroundColor : "#444444"}}>
                <Dashboard/>
               </Paper>
             </Grid>
 
             <Grid item xs={12} md={8} lg={9}>
               <Paper className="paper fixedHeight" style={{ backgroundColor : "#444444"}}>
               <h3 style ={{textAlign: 'center', color : '#5dbcd2'}} > CUSTOMER DETAILS</h3>
               <Table  borderless  className = "mt-2 text-center" style = {{color : 'white'}}  >
               
             <tr style = {{borderColor:"#444444"}}>
           <th style = {{borderColor:"#444444"}}> name: <input type="text" placeholder = "name" name= "pname" onChange = {this.handleChange} class= "form-control"/></th>
   <th style = {{borderColor:"#444444", maxWidth:3,size :3}}>age:<input type="number" maxlength = "3" placeholder = "age" name= "age" maxLength = "3" size = "3" onChange = {this.handleChange} class= " form-control"/></th>
           </tr>
          
             <tr style = {{borderColor:"#444444"}}>
           <th style = {{borderColor:"#444444"}}>address:<input type="text" placeholder = "address" name= "address" onChange = {this.handleChange} class= "form-control"/></th>
   <th style = {{borderColor:"#444444"}}>email:<input type="text" placeholder = "email" name= "email" onChange = {this.handleChange} class= " form-control"/></th>
           </tr>
 
           </Table>
               </Paper>
             </Grid>
             
             
             
             <Grid item xs={12} lg ={12} md = {12}>
               <Paper className="paper" style={{ backgroundColor : "#444444"}}>
                 <h3 style ={{textAlign: 'center', color : '#5dbcd2'}} > INVOICE DETAILS</h3>
                 <br></br>
               <Table  borderless  className = "table table-borderless mt-2 text-center" style = {{color : 'white'}}  >
           
          <tr style = {{borderColor:"#444444"}}>
             <th style = {{borderColor:"#444444"}}>SR</th>
             <th style = {{borderColor:"#444444"}}>ITEM</th>
             <th style = {{borderColor:"#444444"}}>QUANTITY</th>
             <th style = {{borderColor:"#444444"}}>PRICE</th>
             
           </tr>
          <tr style = {{borderColor:"#444444"}}>
           <th style = {{borderColor:"#444444"}}><input type="number" placeholder = "sr" name= "sr" onChange = {this.handleChange} class= "form-control"/></th>
   <th style = {{borderColor:"#444444"}}><input type="text" placeholder = "item" name= "item" onChange = {this.handleChange} class= " form-control"/></th>
   <th style = {{borderColor:"#444444"}}><input type="number" placeholder = "quantity" name= "quantity" onChange = {this.handleChange} class= " form-control"/></th>
   <th style = {{borderColor:"#444444"}}><input type="number" placeholder = "price" name= "price" onChange = {this.handleChange} class= " form-control "/></th>
   </tr>
   <tr style = {{borderColor:"#444444"}}>
           <th style = {{borderColor:"#444444"}}><input type="number" placeholder = "sr" name= "sr1" onChange = {this.handleChange} class= "form-control"/></th>
   <th style = {{borderColor:"#444444"}}><input type="text" placeholder = "item" name= "item1" onChange = {this.handleChange} class= " form-control"/></th>
   <th style = {{borderColor:"#444444"}}><input type="number" placeholder = "quantity" name= "quantity1" onChange = {this.handleChange} class= " form-control"/></th>
   <th style = {{borderColor:"#444444"}}><input type="number" placeholder = "price" name= "price1" onChange = {this.handleChange} class= " form-control "/></th>
   </tr>
 
         
         </Table>
               </Paper>
             </Grid>
           </Grid>
           <br></br>
           <Container  className="vertical-center">    
             <button  className = " btn btn-success mx-2 float-center alignself-center button center"  onClick = {this.createDownloadPdf}>
           Download PDF
             </button>
             </Container>
           
         </Container>
         
       </main>
       </body>
       </Container>
       </Fragment>
    
  }
}

export default Applet;
