const fs = require('fs');

//Encryption assests
const privateKey  = fs.readFileSync('./server/encryption/localhost.key', 'utf8');
const certificate = fs.readFileSync('./server/encryption/localhost.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};

module.exports = {
    credentials
}