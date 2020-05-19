import React, {Component, Fragment,useState} from 'react';
import axios from "axios";
import {saveAs} from "file-saver";
import './Applet.css';
import SideBars from './SideBars';
import './styles.css';
import Dashboard from './Dashboard'

class Applet extends Component {
state = {
  sr : "",
  quantity:"",
  item :"",
  price:"",
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
  cell1.innerHTML = `<input type="number" placeholder = "sr" name= "sr" onChange = {this.handleChange} class= "form-control"/>`;
  cell2.innerHTML = `<input type="text" placeholder = "item" name= "item" onChange = {this.handleChange} class= " form-control"/>`;
  cell3.innerHTML =`<input type="number" placeholder = "quantity" name= "quantity" onChange = {this.handleChange} class= " form-control"/>` ;
  cell4.innerHTML =`<input type="number" placeholder = "price" name= "price" onChange = {this.handleChange} class= " form-control "/>`;
  

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
      <Dashboard/>
      <header>
        <h1 className = "text-center">INVOICE</h1>
      </header>
      
        <table  className = "table mt-5 text-center" >
          <thead>
          <tr>
            <th>SR</th>
            <th>ITEM</th>
            <th>QUANTITY</th>
            <th>PRICE1</th>
            
          </tr>
          </thead>
          </table>
          <table className = "table mt-5 text-center" id="myTable">
          <tbody><tr>
          <th><input type="number" placeholder = "sr" name= "sr" onChange = {this.handleChange} class= "form-control"/></th>
  <th><input type="text" placeholder = "item" name= "item" onChange = {this.handleChange} class= " form-control"/></th>
  <th><input type="number" placeholder = "quantity" name= "quantity" onChange = {this.handleChange} class= " form-control"/></th>
  <th><input type="number" placeholder = "price" name= "price" onChange = {this.handleChange} class= " form-control "/></th>
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
