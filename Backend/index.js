const express = require('express')
const app = express();
const port = 5000;

// DB Connection 
const ConnDB = require('./DatabaseConnection')
ConnDB();


//get routes :
const product_routes = require('./Routes/product')

app.use(express.json())

// route middleware
app.use('/', product_routes)
app.use('/api', product_routes)
app.use('/library', product_routes)

// app.get('/', async (req, res)=>{
//     res.send("Hello Praveen Sankhla");
// })

app.listen(port,()=>{
    console.log(`hello from port ${port}`);
})