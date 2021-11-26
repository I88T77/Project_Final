const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const admin = new Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
var admins = mongoose.model('admins',admin);
module.exports = admins