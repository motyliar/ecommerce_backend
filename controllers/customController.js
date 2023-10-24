const Custom = require('../models/customModel');


class CustomActions {

    async getCustom (req, res) {
        try {
            const custom = await Custom.find({});
            res.status(200).json(custom)
        } catch(error) {
            res.status(500).json({message: error.message})
        }
    }

    async getSingleCustom (req, res) {
        try {
            const {id} = req.params
            const custom = await Custom.findById(id)
            if (!custom) {
                return res.status(404).json({message: `Cannot find ID ${id}`});
            }
            res.status(200).json(custom);

        } catch(error){
            res.status(500).json({message: error.message})
        }
    }
    async postCustom (req,res) {
            try {
                const custom = await Custom.create(req.body)
                res.status(200).json({message: 'Add to DB', custom});
            } catch(error) {
                res.status(500).json({message: error.message});
            }
    }

    async deleteCustom (req, res) {
        try {
            const {id} = req.params
            const custom = await Custom.findByIdAndDelete(id);
           if (!custom) {
            return res.status(404).json({message: 'Not found'});
           }
           res.status(200).json({message: 'Delete success'});
        } catch(error) {
            res.status(500).json({message: error.message});
        }
    }


}


module.exports = new CustomActions();

