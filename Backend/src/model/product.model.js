const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const product = new Schema({
    productname:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
})
var products = mongoose.model('products',product);
module.exports = products