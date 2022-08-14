const User = require('../models/user')

module.exports.postSignup=async (req, res,next) => {
    try {
        const newUser=new User({
            name:req.body.username,
            email:req.body.email,
            password:req.body.password,
            mobile:req.body.mobile
        })
        await newUser.save()
        res.status(200).json('User created')
    } catch (err) {
        next(err)
    }
}