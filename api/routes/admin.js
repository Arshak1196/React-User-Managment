const express = require('express')
const router = express.Router()
const { getAllUsers, getSingleUser, editUser, deleteUser, getForms, newToPending,
    pendingToApprove, pendingToDecline, getAllForms, createSlots, getAllSlots, bookSlot, getApprovedForms } = require('../controllers/admin')
const { verifyToken, verifyAdmin } = require('../utils/verifyToken')


//getAllUser
router.get('/users', getAllUsers)

//getSingleUser
router.get('/getUser/:id', getSingleUser)

//editUser
router.put('/editUser/:id', editUser)

//deleteUser
router.delete('/deleteUser/:id', deleteUser)

//getAllForms
router.get('/allforms', getAllForms)

//getForms
router.get('/forms/:key', getForms)

//getApprovedForms
router.get('/approvedforms',getApprovedForms)

//newToPending
router.put('/pending', newToPending)

//pendingToApprove
router.put('/approve', pendingToApprove)

//pendingToDecline
router.put('/decline', pendingToDecline)

//createSlots
router.put('/slots/createslots', createSlots)

//getAllSlots
router.get('/slots/getslots', getAllSlots)

//bookSlot
router.put('/slots/bookslot',bookSlot)



module.exports = router;