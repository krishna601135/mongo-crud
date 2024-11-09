const express = require('express')
const router = express.Router()
const {getProduct, getProducts,createProduct,updateProduct, deleteProduct} = require('../controllers/product.controller')



router.get('/', getProducts)
router.get('/:id', getProduct)

//create product
router.post('/', createProduct)

// update a product
router.put('/:id', updateProduct)

// delete a product
router.delete('/:id', deleteProduct)


module.exports = router;