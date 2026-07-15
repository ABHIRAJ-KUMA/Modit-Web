const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req,res)=>{
    res.json({
        message:"Modit API Running"
    });
});

// Mount MODIT routes (prototype stubs)
try {
    const moditRoutes = require('./routes/modit');
    app.use('/api/modit', moditRoutes);
} catch (e) {
    // ignore if routes not present during development
}

try {
    const aiRoutes = require('./routes/ai');
    app.use('/api/ai', aiRoutes);
} catch(e) {}

try {
    const suppliers = require('./routes/suppliers');
    app.use('/api/suppliers', suppliers);
} catch(e) {}


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});