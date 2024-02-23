const express = require('express');

const product_controler=require('../controllers/products');

const router = express.Router();

router.get('/',product_controler.getproduct);
    


module.exports=router;
