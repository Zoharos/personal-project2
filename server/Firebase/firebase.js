const fireAdmin = require('firebase-admin');

const serviceAccount = require('./cobuy-5a215-firebase-adminsdk-fttr0-8330648b0e.json');

fireAdmin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DB_URL
});