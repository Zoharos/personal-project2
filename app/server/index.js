import app from './app';

const port = process.env.PORT || 8081;

app.listen(port);
console.log(`Listening at http://localhost:${port}`);