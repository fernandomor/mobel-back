const express = require('express');
const Product = require('../models/Product.model');
const router  = express.Router();


  

router.get('/:category', async (req, res, next) => {
    const {category} = req.params
    const response = await Product.find({category})
    res.json(response)
});

router.get("/list/products", async (req,res,next)=>{
    const prod = await Product.find({}).sort({'date': -1}).limit(4)
    res.json(prod)
})



module.exports = router;





//Guardar el carrito de compras 



// 