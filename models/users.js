const mongoose = require('mongoose');

const Users= new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    followers:{
        type: mongoose.Schema.Types.Objects,
        ref: 'User'
    }
})

module.exports= mongoose.model('User', Users);