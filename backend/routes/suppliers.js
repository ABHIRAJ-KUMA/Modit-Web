const express = require('express');
const router = express.Router();

// Search suppliers by material / location (mock)
router.get('/search', (req,res)=>{
  const q = req.query.q || '';
  res.json({results:[{name:'Sharma Traders',city:'Noida',materials:['cement','sand']},{name:'NCR Steel Hub',city:'Ghaziabad',materials:['steel']} ]});
});

// Supplier onboarding stub
router.post('/onboard', (req,res)=>{
  const supplier = req.body;
  // In prototype, accept and return a basic id
  res.json({ok:true, supplierId:'S-'+Date.now(), supplier});
});

module.exports = router;
