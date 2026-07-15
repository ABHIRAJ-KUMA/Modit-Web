const express = require('express');
const router = express.Router();

router.get('/status', (req,res)=>{
  res.json({status:'ok', service:'modit-prototype'});
});

// basic endpoint to request a quote
router.post('/request-quote', (req,res)=>{
  const {items, location, contact} = req.body;
  // In prototype, respond with mocked quote id and estimated suppliers
  res.json({quoteId: 'Q-'+Date.now(), suppliers: [{name:'Sharma Traders', eta:'Same day', priceEstimate:'₹360/qt'}]});
});

module.exports = router;
