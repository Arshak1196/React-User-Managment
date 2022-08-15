const express = require('express');
const { doSignup, doLogin } = require('../controllers/user');
const router = express.Router()


//signup
router.post('/signup', doSignup)
router.post('/login', doLogin)


module.exports = router;