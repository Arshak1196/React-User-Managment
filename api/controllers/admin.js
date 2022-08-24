const { json } = require('express')
const User = require('../models/user')

module.exports.getAllUsers = async (req, res, next) => {
    try {
        const Users = await User.find({ "isAdmin": false })
        res.status(200).json(Users)
    } catch (err) {
        next(err)
    }
}
module.exports.getSingleUser = async (req, res, next) => {
    try {
        const Users = await User.findById(req.params.id)
        res.status(200).json(Users)
    } catch (err) {
        next(err)
    }
}
module.exports.editUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err)
    }
}
module.exports.deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User Deleted')
    } catch (err) {
        next(err)
    }
}
module.exports.getAllForms = async (req, res, next) => {
    try {
        const form = await User.find({ "application.application": true })
        res.status(200).json(form)
    } catch (err) {
        next(err)
    }
}
module.exports.getApprovedForms =async (req,res,next)=>{
    try {
        const form = await User.find({ isSlotAlloted:false,"application.application": true })
        res.status(200).json(form)
    } catch (err) {
        next(err)
    }
}
module.exports.getForms = async (req, res, next) => {
    try {
        const newForm = await User.find({ "application.status": req.params.key })
        res.status(200).json(newForm)

    } catch (err) {
        next(err)
    }
}
module.exports.newToPending = async (req, res, next) => {
    try {
        const form = await User.findByIdAndUpdate(req.body.id,
            { $set: { "application.status": "pending" } },
            { new: true }
        )
        res.status(200).json(form)
    } catch (err) {
        next(err)
    }
}
module.exports.pendingToApprove = async (req, res, next) => {
    try {
        const form = await User.findByIdAndUpdate(req.body.id,
            { $set: { "application.status": "approve" } },
            { new: true }
        )
        res.status(200).json(form)
    } catch (err) {
        next(err)
    }
}
module.exports.pendingToDecline = async (req, res, next) => {
    try {
        const form = await User.findByIdAndUpdate(req.body.id,
            { $set: { "application.status": "decline" } },
            { new: true }
        )
        res.status(200).json(form)
    } catch (err) {
        next(err)
    }
}
module.exports.createSlots = async (req, res, next) => {
    const slots = []
    for (i = 0; i < 40; i++) {
        slots.push({
            "id": i,
            "isBooked": false
        })
    }
    try {
        const slot = await User.updateOne({ "isAdmin": true }, {
            $set: { "slots": slots }
        })
        res.status(200).json("Slot Created")
    } catch (err) {
        next(err)
    }
}
module.exports.getAllSlots = async (req, res, next) => {
    try {
        const admin = await User.findOne({ "isAdmin": true });
        const slots = admin.slots;
        res.status(200).json(slots)
    } catch (err) {
        next(err)
    }
}
module.exports.bookSlot = async (req, res, next) => {
    const slotid=parseInt(req.body.slot)
    try {
        console.log(req.body)
        await User.updateOne({ "isAdmin": true, "slots.id": slotid }, {
            $set: {
                "slots.$.isBooked": true,
                "slots.$.applicantId":req.body.application,
            }
        })
        await User.updateOne({_id:req.body.application},{
            $set:{isSlotAlloted:true}
        })
        res.status(200).json("setted")
    } catch (err) {
        next(err)
    }
}