const mongoose = require('mongoose');
const product = require('./productModel')

const orderSchema = mongoose.Schema({
    orderNumber: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true},
    totalPrice: {type: String, required: true},
    deliveryPrice: {type: String, required: true},
    products: { type: [{
        productId: {type: String, required: true},
        name: {type: String, required: true},
        imgUrl: {type: String, required: true},
        price: {type: String, required: true},


    }
        
    ], required:true},
    orderStatus: {type: String, required: false, default: "In progress"}


})

const Order = mongoose.model('order', orderSchema);

module.exports = Order;