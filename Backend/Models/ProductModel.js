const mongoose = require('mongoose')

const psinfo = new mongoose.Schema({
    id : Number,
    name : String,
    gender : { 
        type :String,
        required:true
    },
    designation : String
})

module.exports = mongoose.model("infos", psinfo)