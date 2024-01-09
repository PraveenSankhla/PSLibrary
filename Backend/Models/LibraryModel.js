const mongoose = require('mongoose')

const LibraryModel = new mongoose.Schema({
    id : Number,
    img : String,
    heading : String,
    createdby : String,
    firstapper : String,
    woweffect : String
})

module.exports = mongoose.model("library", LibraryModel)