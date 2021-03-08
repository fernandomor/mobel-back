const express = require('express');
const Product = require('../models/Product.model');
const router  = express.Router();


  

router.get('/:category', async (req, res, next) => {
    const {category} = req.params
    const response = await Product.find({category})
    res.json(response)
});



module.exports = router;





//Guardar el carrito de compras 



// 