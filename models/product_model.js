const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter the product name"]
    },

    quantity: {
        type: Number,
        required: true,
        default: 0

    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: false,
    }

},
    {

        timestamps: true,
    }


)


const Product = mongoose.model("product", productSchema)

module.exports = Product;