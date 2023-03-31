const express = require("express");
const dotenv = require("dotenv");

const productRouter = require('./routes/product');
const orderRouter = require('./routes/order');
const Database = require('./database');


dotenv.config();
Database.connectDatabase();
const app = express();
app.use(express.json());

// routes
app.use("/api/orders",orderRouter);
app.use("/api/prducts",productRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server run in port ${PORT}`));