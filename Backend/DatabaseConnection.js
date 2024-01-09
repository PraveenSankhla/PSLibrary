const mongoose = require('mongoose')
const constring = "mongodb+srv://{Connectionstring}?retryWrites=true&w=majority"

const MongoDb = async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/psinfo?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2")
    .then(() => {console.log("Connected");})
    .catch((err) => {console.log(err)})
}

module.exports = MongoDb;