const express = require('express');
const router = express.Router();

// AI recommendation stub
router.post('/recommend', (req,res)=>{
  const {projectType, budget} = req.body;
  // simple mocked recommendations
  res.json({recommendedMaterials:[
    {item:'Cement 50kg', qty:100, unit:'bags'},
    {item:'TMT Steel 10mm', qty:2000, unit:'kg'}
  ], note:'Mocked recommendation for prototype'});
});

// BOQ parsing stub
router.post('/parse-boq', (req,res)=>{
  // accept file or pasted text (prototype)
  res.json({success:true, items:[{name:'Cement',qty:120,unit:'bags'},{name:'Sand',qty:35,unit:'m3'}]});
});

// Quotation compare stub
router.post('/compare-quotes', (req,res)=>{
  // accept multiple quotes and return comparison
  res.json({best:0, summaries:[{supplier:'A',total:10000},{supplier:'B',total:9800}]});
});

module.exports = router;
