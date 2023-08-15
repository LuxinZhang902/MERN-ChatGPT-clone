const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//dotenv
dotenv.config();

//mongo connectin
connectDB();

//Rest Object
const app = express();

//minddlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));

const PORT = process.env.PORT || 8080;

//Listen Server
app.listen(PORT, () =>{
    console.log(`Server is Running in ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white);
})