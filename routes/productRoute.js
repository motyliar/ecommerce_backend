const express = require('express');
const Product = require('../controllers/productController');

const router = express.Router();


router.get('/', Product.getProducts)
router.get('/:id', Product.getProduct)

router.post('/', Product.sendProduct)

router.put('/update/:id', Product.updateProduct)
router.put('/update', Product.upadateMany)

router.delete('/:id', Product.deleteProduct)










module.exports = router;