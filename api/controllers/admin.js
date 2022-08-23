const User = require('../models/user')

module.exports.getAllUsers=async (req,res,next)=>{
    try {
        const Users = await User.find()
        console.log(Users)
        res.status(200).json(Users)
    } catch (err) {
        next(err)
    }
}
module.exports.getSingleUser=async(req,res,next)=>{
    try {
        const Users = await User.findById(req.params.id)
        res.status(200).json(Users)
    } catch (err) {
        next(err)
    }
}
module.exports.editUser=async (req, res,next) => {
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
module.exports.deleteUser=async (req, res,next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User Deleted')
    } catch (err) {
        next(err)
    }
}
module.exports.getForms = async (req,res,next)=>{
    try {
        const newForm = await User.find({"application.status":req.params.key})
            res.status(200).json(newForm)
       
    } catch (err) {
        next(err)
    }
}
module.exports.newToPending=async (req,res,next)=>{
    try {
        console.log(req.body)
        const form = await User.findByIdAndUpdate(req.body.id,
            { $set: {"application.status":"pending"} },
            { new: true }
        )
        res.status(200).json(form)
    } catch (err) {
        next(err)
    }
}