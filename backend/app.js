const express = require('express');
const app = express();


app.get('/',(req, res)=>{
    res.send('Hello World!');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 

})



//-----------api-----
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(express.json())
Movie_route = require('./routes/Movieroutes')
app.use('/m', Movie_route)
Iptv_route = require('./routes/Iptvroutes')
app.use('/r', Iptv_route)
app.get('/watch', (req,res)=>{
    res.send('Hello World!');

   }) 
//app.use('/api/v1/', product)
//const { products, product } = require('./routes/productroutes')
module.exports = app
//