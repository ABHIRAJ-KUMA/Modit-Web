const express = require('express');
const router = express.Router();
const productsData = require('../data/products.json');

// Get all products
router.get('/', (req, res) => {
  const { category, search } = req.query;
  let products = productsData;

  if (category) {
    products = products.filter(p => p.category === category);
  }

  if (search) {
    products = products.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.json(products);
});

// Get single product
router.get('/:id', (req, res) => {
  const product = productsData.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

// Get categories
router.get('/categories/all', (req, res) => {
  const categories = [...new Set(productsData.map(p => p.category))];
  res.json(categories);
});

module.exports = router;