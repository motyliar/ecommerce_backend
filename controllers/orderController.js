const Order = require('../models/orderModel');


class OrderAction {

    async getOrder (req, res) {
        try {
            const order = await Order.find({});
            res.status(200).json(order)
        } catch(err) {
            res.status(500).json({message: err.message})
        }
    }

    async postOrder  (req, res) {
        try {
            const order = await Order.create(req.body);
            res.status(200).json({message: "Order Complete"})

        }catch(err) {
            res.status(500).json({message: err.message})
            console.log(err.message)
    } 
    }

    async updateOrder (req, res) {
        try {
            const { id } = req.params
            const order = await Order.findByIdAndUpdate(id, req.body);
            if(!order) {
                return res.status(404).json({message: "Not found"})
            } 
            const updateOrder = await Order.findById(id);
            res.status(200).json(updateOrder)
        } catch(err) {
            res.status(500).json({message: err.message})
        }
    }
}


module.exports = new OrderAction();