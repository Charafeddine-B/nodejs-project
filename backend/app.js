const express = require('express');
const app = express();


app.get('/',(req, res)=>{
    res.send('Hello World!');
   

})



//-----------api-----

  
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