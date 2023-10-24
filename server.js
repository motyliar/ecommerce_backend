const express = require('express')
const app = express();
const mongoose = require('mongoose')

const PORT = 3000
const URL = 'mongodb+srv://jacek:AKac61CZoRESkUTC@fluttercluster.g5psmqq.mongodb.net/?retryWrites=true&w=majority'

app.get('/' ,(req, res) => {
    res.send('Hello')
} )


app.listen(PORT, () =>  {
    console.log('NODE API is listen on Port 3000')
})