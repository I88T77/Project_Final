const express = require('express')
const mongodb = require('../controller/product.controller')
const router = express.Router();
router.get('/allproduct',mongodb.getallproduct);
router.get('/getsingleproduct/:id',mongodb.getsingleproduct);
router.post('/insertproduct',mongodb.createproduct);
router.put('/updateproduct/:id',mongodb.updateproduct);
router.delete('/deleteproduct/:id',mongodb.deleteproduct);
module.exports=router;