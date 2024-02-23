const express = require('express');
const router = express.Router();
const product_controler=require('../controllers/products');

router.get('/add-product',product_controler.getAddproduct);
router.post('/add-product',product_controler.postAddproduct);

exports.routes=router;

