const Product = require('../models/product_model');
const mongoose = require('mongoose');




const getProducts = async (req, res) => {
    try {
        const getProducts = await Product.find({});
        res.status(200).json(getProducts)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


const createProduct = async (req, res) => {
    const productDetails = req.body;
    try {

        const product = await Product.create(req.body)
        res.status(201).json(product)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


const getProduct = async (req, res) => {
    const { id } = req.params
    try {
        const getProduct = await Product.findById(id);
        res.status(200).json(getProduct)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


const updateProduct = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send('Product Not Found');
        }

        const updateProduct = await Product.findByIdAndUpdate(id, req.body)
        await updateProduct.save();
        console.log(updateProduct);
        res.status(200).send('product updated successfully');

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send('Product Not Found');
        }
        await Product.findByIdAndDelete(id)
        res.status(200).send('product deleted successfully');

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


module.exports = {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}