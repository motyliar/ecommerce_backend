const express = require('express')

const custom = require('../controllers/customController');
const router = express.Router();


router.get('/', custom.getCustom)
router.get('/:id', custom.getSingleCustom)

router.post('/', custom.postCustom)

router.delete('/:id', custom.deleteCustom)





module.exports = router;