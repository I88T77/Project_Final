const express = require('express')
const mongodb = require('../controller/admin.controller')
const router = express.Router();
router.get('/alladmin',mongodb.getalldetail1);
router.get('/getsingleadmin/:id',mongodb.getsingleadmin);
router.post('/insertadmin',mongodb.createadmin);
router.put('/updateadmin/:id',mongodb.updateadmin);
router.delete('/deleteadmin/:id',mongodb.deleteadmin);
module.exports=router;