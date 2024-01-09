const PsinfoModel = require("../Models/ProductModel")
const LibraryModel = require('../Models/LibraryModel')

// Get all product
const getDatafromDB = async(req, res)=>{
    try{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        const data = await PsinfoModel.find()
        res.json(data);
    }
    catch(error){
        res.json(error)
        console.log(error)
    }
}
// module.exports = getDatafromDB;


// Get single product
const Product_singleDetail = async (req, res) => {
    let product_id = req.params.product_id;
    try{
        const data = await PsinfoModel.find({id : product_id})
        res.json(data);
        console.log(data);
    }
    catch(error){
        res.json(error)
        console.log(error)
    }
};

const GetLibraryData = async(req, res)=>{
    try{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        const data = await LibraryModel.find()
        res.json(data);
    }
    catch(error){
        res.json(error)
        console.log(error)
    }
}

const Product_Create = async (req, res) => {
    const CreateProduct = new PsinfoModel({
        name : req.body.name,
        gender : req.body.gender,
        designation : res.body.designation
    })

    try {
        const savedetail = CreateProduct.save();
        res.send(savedetail)
    } catch (error) {
        res.status(400).send(error)
    }
};

const Product_UpdateDetail = async (req, res) => {
    const UpdateProduct = {
        name : req.body.name,
        gender : req.body.gender,
        designation : res.body.designation
    }

    try {
        const UpdateInfo = await PsinfoModel.findByIdAndUpdate(
            {id : req.params.product_id},
            UpdateProduct
        )
        res.json(UpdateInfo);
    } catch (error) {
        res.json(error)
    }
};


const Product_DeleteDetail = async (req, res) => {
    const DeleteDetail = {
        name : req.body.name,
        gender : req.body.gender,
        designation : res.body.designation
    }

    try {
        const DeleteInformation = await PsinfoModel.findByIdAndUpdate(
            {id : req.params.product_id},
            DeleteDetail
        )
        res.json(DeleteInformation);
    } catch (error) {
        res.json(error)
    }
};

module.exports = {getDatafromDB, Product_singleDetail, GetLibraryData, Product_Create, Product_UpdateDetail, Product_DeleteDetail}