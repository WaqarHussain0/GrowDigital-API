const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');
const uuid = require('uuid');
const connectDB = require('./db');
const serviceRouter = require('./router/services');



const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.use('/services', serviceRouter);


app.listen(3000, () => console.log('Listening to port 3000'));
