const express = require('express')
const mongodb = require('../controller/user.controller')
const router = express.Router();
router.get('/alluser',mongodb.getalldetail1);
router.get('/getsingleuser/:id',mongodb.getsingleuser);
router.post('/insertuser',mongodb.createuser);
router.post('/insertproductinUser',mongodb.createproductinuser);
router.put('/updateuser/:id',mongodb.updateuser);
router.delete('/deleteuser/:id',mongodb.deleteuser);
module.exports=router;