const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config()

const dbUrl = process.env.DB_URL

async function initializeDB() {
    try {
     await mongoose.connect(dbUrl, {});
        console.log('mongodb connected successfully');
    } catch (err) {
        console.log(`db error: ${err.message}`)
    }

}

module.exports = initializeDB