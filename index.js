const express = require('express');
const initializeDB = require('./databases/db')
const productRoute = require('./routes/product.routes')
const app = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));



//routes
app.use('/api/products', productRoute)


initializeDB();
 

app.listen(3000, () => {
    console.log(`Server is listening at http://localhost:3000`);
})

app.get('/', (req, res) => {
    res.send('Hello Node Api');
})


