const express = require('express');
const { postSignup } = require('../controllers/user');
const router = express.Router()


//signup
router.post('/signup', postSignup)


module.exports =router;