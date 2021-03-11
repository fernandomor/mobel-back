const express = require('express');
const Product = require('../models/Product.model');
const Order = require('../models/Order.model');
const router  = express.Router();

//aqui poner el auth
router.get('/:category', async (req, res, next) => {
    const {category} = req.params
    const response = await Product.find({category})
    res.json(response)
});

router.get("/list/products", async (req,res,next)=>{
    const prod = await Product.find({}).sort({'date': -1}).limit(4)
    res.json(prod)
})

router.post("/create/order", async (req,res,next)=>{
    const {products,ordNum,usuario,suma} = req.body   

    const selectedProducts = products.map(e=>{
       return e._id
    })
    
    const ordCreated = await Order.create({
        selectedProducts,
        orderNumber:ordNum,
        emailUser:usuario.email,
        total:suma
    })

    console.log("la nueva",ordCreated)
    
})



module.exports = router;





//Guardar el carrito de compras 



// 