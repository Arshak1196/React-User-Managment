const express = require('express')
const router = express.Router()
const createError = require('../utils/error')
const {getAllUsers,getSingleUser, editUser, deleteUser} = require('../controllers/admin')



//getAllUser
router.get('/users',getAllUsers)

//getSingleUser
router.get('/getUser/:id',getSingleUser)

//editUser
router.put('/editUser/:id', editUser)

//deleteUser
router.delete('/deleteUser/:id', deleteUser)

module.exports = router;