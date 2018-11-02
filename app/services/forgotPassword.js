const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const schemas = require('./schemas');
router.use(express.json());

const User = mongoose.model("User",schemas.UserSchema,"Users");

router.get('/', (req, res) => {
  User.findOne({email:req.query.email}, (err, user) => {
    if(user)
      res.status(200).send({email: user.email, token: token});
    else
      res.status(404).send('Not Found');
    if(err)
      res.status(400).send(err);
  })
})

module.exports = router