import app from './app';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;

//app.listen(8080,'0.0.0.0');
console.log(`Listening at https://localhost:${port}`);
