const express = require('express');
const Product = require('../models/Product.model');
const Order = require('../models/Order.model');
const Kits = require('../models/Kits.model')
const router  = express.Router();
const nodemailer = require("nodemailer")


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

router.get("/get/:mail" , async (req,res,next)=>{
    const {mail} = req.params
    const orders = await Order.find({emailUser:mail})
    res.json(orders)
})

router.get("/result/:kit" , async (req,res,next)=>{
    const {kit} = req.params
    const elKit = await Kits.find({kitName:kit})
    console.log(elKit)
    res.json(elKit)
})

router.post("/user/sendmail", async (req,res,next)=>{
    const {emailAddress} = req.body
    const subject = "Apoyo para Home Office"
    const message = "Tener un espacio de trabajo y las herramientas, es indispensable para realizar un trabajo bien hecho, es por eso que estan pidiendo tu apoyo para comprar este espacio de trabajo https://mobel-helpy.netlify.app/quizz"

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'geratref15@gmail.com',
          pass: 'NOMBRESFALSOS123'
        }
      });
      transporter.sendMail({
        from: '" Mobel by helpy " <info@helpy.mx>',
        to: emailAddress, 
        subject: subject, 
        text: message,
        html: `<b>${message}</b>`
      })
      .then(info => console.log(info))
      .catch(error => console.log(error))


})

module.exports = router;





//Guardar el carrito de compras 



// 