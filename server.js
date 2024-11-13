const express = require("express");
const mongoose = require("mongoose");
const app = express();
const memhranRoutes = require('./api/memhran');
const lmatRoutes = require('./api/lmat');


const connectDB = require('../config/db')

const port = process.env.PORT || 5000;
app.use(express.json());

connectDB();


//different routes mnamn
app.use('/memhran', memhranRoutes);
app.use('/lmat', lmatRoutes);



app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
