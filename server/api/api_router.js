const express = require('express');
const router = express.Router();
const login_service = require('../services/login');
const forgotPassword_service = require('../services/forgotPassword');
router.use(express.json());

router.use('/login', login_service);
router.use('/forgotPassword', forgotPassword_service);

module.exports = router;
  //z8LzAyjpdk4tXpOI