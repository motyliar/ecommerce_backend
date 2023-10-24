require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute');
const customRoute = require('./routes/customRoute');



const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL


app.use(express.json())
app.use(express.urlencoded({extended: false}))


// routes


app.use('/api/product', productRoute)
app.use('/api/custom', customRoute)






mongoose.connect(MONGO_URL).then(() => { 
    app.listen(PORT, () =>  {
        console.log(`NODE API is listen on Port ${PORT}`)
    })
    console.log("Connected to MONGO DB")}).catch((error) => {console.log(error)})