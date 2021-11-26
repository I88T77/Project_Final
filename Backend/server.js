const mongoose = require('mongoose');
const express = require('express');
const multer  = require('multer')
const DB = require('./src/config/dbconfig')
const routeruser = require('./src/router/user.router')
const routerproduct = require('./src/router/product.router')
const routercard = require('./src/router/card.router')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use('/mongoose1',routeruser);
app.use('/mongoose1',routerproduct);
app.use('/mongoose1',routercard);
const fileStorageEngine = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: fileStorageEngine })

mongoose.connect(DB.connection_url,{ useNewurlParser: true }).then(()=>{
    console.log('connection successfull');
}).catch((err)=> console.log(err));



app.listen(port,()=> console.log(`listening on localhost: ${port}`))




// npm i
