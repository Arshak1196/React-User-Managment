const express = require('express');
const { doSignup, doLogin } = require('../controllers/user');
const { verifyUser } = require('../utils/verifyToken');
const router = express.Router()


//signup
router.post('/signup', doSignup)
router.post('/login', doLogin)
router.post('/',verifyUser)


module.exports = router;