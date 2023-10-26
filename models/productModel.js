const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    category: {type: String, required: true},
    name : {type : String, requried: true},
    imgUrl : {type: [String], required: true},
    categoryImg: {type: String, required: true},
    price: {type: Number, required: true},
    dimensionHeight: {type: Number, required: true},
    dimensionWidth: {type: Number, required: true},
    description: {type: String, required: true},
    weight: {type: Number, required: true},
    isNew: {type: Boolean, required: false, default: false },
    isSold: {type: Boolean, required: false, default: false},
}, { timestamps: true}
)

const Product = mongoose.model('Product', productSchema);

module.exports = Product;