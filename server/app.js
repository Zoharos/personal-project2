const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const https = require('https');
const fs = require('fs');
const pagesRouter = require('./pages/pagesRouter');
const apiRouter = require('./api/api_router');
const dotenv = require('dotenv').config();

//Encryption assests
const privateKey  = fs.readFileSync('./server/encryption/localhost.key', 'utf8');
const certificate = fs.readFileSync('./server/encryption/localhost.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};

const app = express();

const assets = express.static(path.join(__dirname, '../build'));

app.use(cors());
app.use(assets);

//Database connection
const uri = process.env.DB_CONNECTION_STRING;
mongoose.connect(uri, {useNewUrlParser: true});

//Every route with api
app.use('/api', apiRouter);
//Every route that doesn't have api
app.get(/^((?!api).)*$/, pagesRouter);

//https connection
const httpsServer = https.createServer(credentials,app, () => {
    console.log('Listening HTTPs')
  });
httpsServer.listen(3000, "0.0.0.0");

module.exports = app;
