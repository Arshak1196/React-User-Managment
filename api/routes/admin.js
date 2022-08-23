const express = require('express')
const router = express.Router()
const { getAllUsers, getSingleUser, editUser, deleteUser, getForms, newToPending } = require('../controllers/admin')
const { verifyToken, verifyAdmin } = require('../utils/verifyToken')


//getAllUser
router.get('/users', getAllUsers)

//getSingleUser
router.get('/getUser/:id', getSingleUser)

//editUser
router.put('/editUser/:id', verifyAdmin, editUser)

//deleteUser
router.delete('/deleteUser/:id', verifyAdmin, deleteUser)

//getForms
router.get('/forms/:key', getForms)

//pendingToNew
router.put('/pending',newToPending)


module.exports = router;