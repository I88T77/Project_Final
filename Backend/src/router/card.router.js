const express = require('express')
const mongodb = require('../controller/card.controller')
const router = express.Router();
router.get('/allcart',mongodb.getcartProducts);
router.post('/insertcart',mongodb.AddcartProducts);
router.put('/updatecart/:id',mongodb.updatecartproducts);
router.delete('/deletecart/:id',mongodb.deletecart);
module.exports=router;