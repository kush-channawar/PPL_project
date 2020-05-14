import React, {Component, Fragment} from 'react';
import axios from "axios";
import {saveAs} from "file-saver";
import './Applet.css';
import SideBars from './SideBars';
import './styles.css';
import Dashboard from './Dashboard'
import { Redirect } from 'react-router-dom';
const styles = {
  center: {
    marginLeft: "auto",
    marginRight: "auto"
  }
}
class Applet extends Component {
state = {
  name :"",
  receiptId:0,
  price1:0,
  price2:0,
  email:"",
  address:"",
}

handleChange  = ({target : { value, name}})=>  {
  this.setState({[name]: value})
}


myFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  cell1.innerHTML = `<input type="text" placeholder = "name" name= "name" onChange = {this.handleChange} class= "form-control"/>`;
  cell2.innerHTML = `<input type="text" placeholder = "address" name= "address" onChange = {this.handleChange} class= " form-control"/>`;
  cell3.innerHTML =`<input type="text" placeholder = "email" name= "email" onChange = {this.handleChange} class= " form-control"/>` ;
  cell4.innerHTML =`<input type="number" placeholder = "receipt Id" name= "receiptId" onChange = {this.handleChange} class= " form-control "/>`;
  cell5.innerHTML = `<input type="number" placeholder = "Price 1" name= "price1" onChange = {this.handleChange} class= " form-control "/>`;
  cell6.innerHTML =`<input type="number" placeholder = "Price 2" name= "price2" onChange = {this.handleChange} class= " form-control "/>` ;

}
myFunctions() {
  document.getElementById("myTable").deleteRow(0);

}
createDownloadPdf = () => {

  axios.post('/create-pdf', this.state)
  .then(() => axios.get('fetch-pdf', {responseType : 'blob'}))
  .then((res) => {
    const pdfBlob = new Blob([res.data], {type : ' application/pdf' });

    saveAs(pdfBlob, 'newPdf.pdf');
  } );
}
  render(){
    return  <Fragment>
      <SideBars/>
      <Dashboard/>
      <header>
        <h1 className = "text-center">INVOICE</h1>
      </header>
      
        <table  className = "table mt-5 text-center" >
          <thead>
          <tr>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>EMAIL</th>
            <th>RECEIPTID</th>
            <th>PRICE1</th>
            <th>PRICE2</th>
          </tr>
          </thead>
          </table>
          <table className = "table mt-5 text-center" id="myTable">
          <tbody>
          <tr>
            <td><input type="text" placeholder = "name" name= "name" onChange = {this.handleChange} className= " form-control"/></td>
            <td><input type="text" placeholder = "address" name= "address" onChange = {this.handleChange} className= " form-control"/></td>
            <td><input type="text" placeholder = "email" name= "email" onChange = {this.handleChange} className= " form-control"/></td>
            <td><input type="number" placeholder = "receipt Id" name= "receiptId" onChange = {this.handleChange} className= " form-control "/></td>
            <td><input type="number" placeholder = "Price 1" name= "price1" onChange = {this.handleChange} className= " form-control "/></td>
            <td><input type="number" placeholder = "Price 2" name= "price2" onChange = {this.handleChange} className= " form-control "/></td>
            
          </tr>
        </tbody>
        </table>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      ><button className="btn btn-warning mx-2" onClick={this.myFunction}>ADD ROW</button><br></br>
        
      <body>
    
</body>
<button className="btn btn-danger" onClick={this.myFunctions}>DELETE ROW</button>
        <button  className = " btn btn-success mx-2 float-none alignself-center"  onClick = { this.createDownloadPdf}>
          Download PDF
        </button>
      </div>
        </Fragment>
    
  }
}

export default Applet;
