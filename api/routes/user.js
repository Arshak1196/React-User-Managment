const express = require('express');
const { doSignup, doLogin, userHome, submitForm } = require('../controllers/user');
const { verifyUser } = require('../utils/verifyToken');
const router = express.Router()


//signup
router.post('/signup', doSignup)
router.post('/login', doLogin)
router.post('/',verifyUser,userHome)
router.put('/submitApplication',verifyUser,submitForm)


module.exports = router;