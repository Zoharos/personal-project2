import path from 'path';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import https from 'https';
import fs from 'fs';
import pagesRouter from './pages/pagesRouter';
import apiRouter from './api/api_router';
import dotenv from 'dotenv';
dotenv.config();

//Encryption assests
const privateKey  = fs.readFileSync('./app/server/encryption/localhost.key', 'utf8');
const certificate = fs.readFileSync('./app/server/encryption/localhost.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};

const app = express();

const assets = express.static(path.join(__dirname, '../'));

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

export default app;
