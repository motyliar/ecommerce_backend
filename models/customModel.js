const mongoose = require('mongoose');


const customSchema = mongoose.Schema ({

    name: {type: String, required: true},
    email: {type: String, required: true},
    long: {type: String, required: true},
    width: {type: String, required: true},
    height: {type: String, required: true},
    description: {type: String, required: true},
    productKind: {type: String, required: true},
    base64: {type: String, required: false, default: ''}
}, {  timestamps : true
})

const Custom = mongoose.model('custom', customSchema);

module.exports = Custom;