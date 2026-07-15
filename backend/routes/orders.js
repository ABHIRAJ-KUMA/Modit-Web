const express = require('express');
const router = express.Router();

let orders = [];

// Create order
router.post('/', (req, res) => {
  const { items, total, customer } = req.body;
  const order = {
    id: Date.now(),
    items,
    total,
    customer,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  orders.push(order);
  res.status(201).json(order);
});

// Get all orders
router.get('/', (req, res) => {
  res.json(orders);
});

// Update order status
router.patch('/:id', (req, res) => {
  const { status } = req.body;
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  order.status = status;
  res.json(order);
});

module.exports = router;