const express = require('express');
const products = require('./data/products');

const app = express()

app.get('/', (req, res) => {
    res.send('API is running');
})

app.get('/api/products', (req, res) => {
    // res.send('API is running');
    res.json(products);
})

app.get('/api/products:id', (req, res) => {
    // res.send('API is running');
    // res.json(products);
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
})
app.listen(5000, console.log('Server running on port 5000'))
// npm start
