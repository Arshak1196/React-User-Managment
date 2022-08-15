const User = require('../models/user')

module.exports.getAllUsers=async (req,res,next)=>{
    try {
        const Users = await User.find()
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
module.exports.editUser=async (req, res) => {
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
module.exports.deleteUser=async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User Deleted')
    } catch (err) {
        next(err)
    }
}