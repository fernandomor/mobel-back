const express = require('express');
const router  = express.Router();
const Admin = require('../models/Admin.model')
const Product = require('../models/Product.model')
const Kits = require('../models/Kits.model')




//Crear producto
router.post('/product/create', async (req, res, next) => {
  const {productName , productImage , inventory,deliveryTime, productDescription,category,price} = req.body
try{
    const newProd = await Product.create({
        productName,
        productImage , 
        inventory,
        deliveryTime, 
        productDescription,
        category,
        price
    })
}catch(err){
console.log("Error",err)
}
});

//Leer productos
router.get('/product/show', async(req, res, next) => {
    const productsFromDB = await Product.find({})
    res.json(productsFromDB)
});


//Editar producto
router.get('/product/edit/:id', async (req, res, next) => {
    const productId = req.params.id 
    const productMatch = await Product.findById({_id:productId})
    res.json(productMatch)
});

router.post('/product/edit/:id',async (req, res, next) => {
    const {productName , productImage , inventory,deliveryTime, productDescription,category,price} = req.body
    const ProdId = req.params.id

try{
    const newProd = await Product.findByIdAndUpdate(ProdId,{
        productName,
        productImage , 
        inventory,
        deliveryTime, 
        productDescription,
        category,
        price
    }, { new: true })
}catch(err){
console.log("Error",err)
}
});


// Eliminar producto
router.all('/product/delete/:id', async (req, res, next) => {
    const id = req.params.id
    const borrado = await Product.findByIdAndRemove(id)
    res.json(borrado)
});


//SHOW Kit
router.get('/kit/show', async (req, res, next) => {
    const kitsFromDb = await Kits.find({})
    res.json(kitsFromDb)
});

//Crear Kit
router.post('/kit/create', async (req, res, next) => {
    const {kitName , kitImage , kitProducts, kitPrice} = req.body
try{
    const newKit = await Kits.create({
        kitName,
        kitImage , 
        kitPrice
    })
    const pushProd = await Kits.findByIdAndUpdate(newKit._id,{$push: {kitProducts}})
    console.log("este es el nuevo",pushProd, "este es el aantes del push", newKit )
    res.status(200)
}catch(err){
console.log("Error en kits",err)
}
});

//Editar Kit
router.get('/kit/edit/:id', async (req, res, next) => {
    const kitId = req.params.id // la forma de acceder al id puede causar problemas , revisar
    const kitMatch = await Kits.findById({_id:kitId}).populate("kitProducts")
    res.json(kitMatch)
});

router.post('/kit/edit/:id', (req, res, next) => {
  
});


//Borrar Kit
router.all('/kit/delete/:id', async (req, res, next) => {
    const id = req.params.id
    const borrado = await Kits.findByIdAndRemove(id)
    res.json(borrado)
});








module.exports = router;
