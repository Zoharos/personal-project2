import app from './app';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 8443;

//app.listen(port);
console.log(`Listening at https://localhost:${port}`);
