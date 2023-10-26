const express = require('express');
const router = express.Router();
const Order = require('../controllers/orderController');


router.post('/', Order.postOrder );
router.get('/', Order.getOrder);
router.put('/:id', Order.updateOrder)
router.put('/')


module.exports = router;