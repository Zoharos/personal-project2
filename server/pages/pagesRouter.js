const express = require('express');
const path = require('path');
const router = express.Router();
router.use(express.json());

router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'../../build/index.html'), function(err) {
    if(err) { res.status(500).send(err); }
    });
});

module.exports = router;