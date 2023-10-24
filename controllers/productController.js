const Product = require('../models/productModel')


class ProductAction {
        // get all products
    async getProducts   (req, res) {
        try {
            const products = await Product.find({});
            res.status(200).json(products);
        } catch(error) {
            res.status(500).json({message: error.message})
        }

    }
        // get a single product
    async getProduct (req, res) {
        try {
            const {id} = req.params
            const product = await Product.findById(id);
            if(!product) {
                return res.status(404).json({message: `Not found`})
            }
            res.status(200).json(product)
        } catch(error) {
            res.status(500).json({message: error.message})
        }
    }
        // post a single product
    async sendProduct (req, res) {
        try {
            const product = await Product.create(req.body)
            res.status(200).json(product);

        } catch(error) {
            res.status(500).json({message: error.message})
        }
    }

        // update sigle product

        async updateProduct( req, res) {
            try {
                const {id} = req.params
                const product = await Product.findByIdAndUpdate(id, req.body);
                if(!product) {
                    return res.status(404).json({message: `cannot find the product with ID ${id}`})
                } 
                const updateProduct = await Product.findById(id);
                res.status(200).json({updateProduct})

            } catch(error) {
                res.status(500).json({message: error.message})
            }
        }
        async deleteProduct(req, res) {
            try {
                const {id} = req.params
                const product = await Product.findByIdAndDelete(id);
                if(!product) {
                    return res.status(404).json({message: `cannot find product with ID ${id}`})
                }
                res.status(200).json({message: 'Delete Success',product})

            } catch(error) {
                res.status(500).json({message: error.message})
            }
        }
}

module.exports =  new ProductAction();