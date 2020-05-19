
module.exports = ({ pname, price, item, sr ,quantity,age, email, address}) => {
    const today = new Date();


return `
   <!DOCTYPE html>
   <html lang="en">
   <head>
   
      <meta charset="utf-8">
      <title>Example 1</title>
     <style>
     .clearfix:after {
      content: "";
      display: table;
      clear: both;
    }
    
    a {
      color: #5D6975;
      text-decoration: underline;
    }
    
    body {
      position: relative;
      width: 21cm;  
      height: 29.7cm; 
      margin: 0 auto; 
      color: #001028;
      background: #FFFFFF; 
      font-family: Arial, sans-serif; 
      font-size: 14px; 
      font-family: Arial;
    }
    
    header {
      padding: 10px 0;
      margin-bottom: 30px;
    }
    
    #logo {
      text-align: center;
      margin-bottom: 10px;
    }
    
    #logo img {
      width: 90px;
    }
    
    h1 {
      border-top: 1px solid  #5D6975;
      border-bottom: 1px solid  #5D6975;
      color: #5D6975;
      font-size: 2.4em;
      line-height: 1.4em;
      font-weight: normal;
      text-align: center;
      margin: 0 0 20px 0;
      background: url(dimension.png);
    }
    
    #project {
      float: left;
    }
    
    #project span {
      color: #5D6975;
      text-align: left;
      width: 52px;
      margin-right: 10px;
      display: inline-block;
      font-size: 0.8em;
    }
    
    #company {
      float: right;
      text-align: right;
    }
    
    #project div,
    #company div {
      white-space: nowrap;        
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 1;
      margin-bottom: 20px;
    }
    
    table tr:nth-child(2n-1) td {
      background: #F5F5F5;
    }
    
    table th,
    table td {
      text-align: center;
    }
    
    table th {
      padding: 5px 20px;
      color: #5D6975;
      border-bottom: 1px solid #C1CED9;
      white-space: nowrap;        
      font-weight: normal;
    }
    
    table .service,
    table .desc {
      text-align: center;
    }
    
    table td {
      padding: 20px;
      text-align: right;
    }
    
    table td.service,
    table td.desc {
      vertical-align: top;
    }
    
    table td.unit,
    table td.qty,
    table td.total {
      font-size: 1.2em;
    }
    
    table td.grand {
      border-top: 1px solid #5D6975;;
    }
    
    #notices .notice {
      color: #5D6975;
      font-size: 1.2em;
    }
    
    footer {
      color: #5D6975;
      width: 100%;
      height: 30px;
      position: absolute;
      bottom: 0;
      border-top: 1px solid #C1CED9;
      padding: 8px 0;
      text-align: center;
    }
     </style>
   </head>
   <body>
      <header class="clearfix">
         <div id="logo">
         <img src="https://images1-fabric.practo.com/practices/697448/dentinix-multi-specialty-dental-clinic-bangalore-59ca665610040.jpg">
         </div>
         <h1>INVOICE</h1>
         <div id="company" class="clearfix">
         <div>Dentinix</div>
         <div>Off Kasavanahalli Main Road,<br/> Norbert Church Rd, Kasavanahalli,<br /> Bengaluru, Karnataka 560035 </div>
         <div>(+91) 080 4093 5529</div><br>
         <div><a href="mailto:drshrutikadentinix@gmail.com">drshrutikadentinix@gmail.com</a></div>
         </div>
         <div id="project">
         <div><span>PATIENT</span> ${pname}</div>
         <div><span>ADDRESS</span> ${address}</div>
         <div><span>EMAIL</span> <a href="mailto:${email}">${email}</a></div>
         <div><span>DATE</span> ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}</div>
         <div><span>TIME</span> ${`${today.getHours()}:${today.getMinutes()}: ${today.getSeconds()}`}</div>
         <div><span>AGE</span>${age} </div>
         </div>
      </header>
      <main>
         <table style="text:center">
         <thead>
            <tr>
               <th class="service">#</th>
               <th class="desc">ITEM</th>
               <th class ="unit">QUANTITY</th>
               <th class="unit">PRICE</th>
               <th class = "total">TOTAL</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td class="service">${sr}</td>
               <td class="desc">${item}</td>
               <td class="service">${quantity}</td>
               <td class="service">${parseFloat(price).toFixed(2)}</td>
               <td class="total"> ${parseFloat(price * quantity).toFixed(2)} </td>
            </tr>
            <tr>
               <td colspan="4" >SUBTOTAL</td>
               <td class="total"> ${parseFloat(price * quantity).toFixed(2)}  </td>
            </tr>
         </tbody>
         </table>
         <div id="notices">
         <div>NOTICE:</div>
         <div class="notice">A finance charge of 1.5% will be made on unpaid balances after 30 days.</div>
         </div>
      </main>
      <footer>
         Invoice was created on a computer and is valid without the signature and seal.
      </footer>
   </body>
   </html>
    `;
};