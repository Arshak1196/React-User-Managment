const User = require('../models/user')
const bcrypt = require('bcryptjs');
const createError = require('../utils/error');
const jwt = require('jsonwebtoken')
const maxAge=3*24*60*60

module.exports.doSignup = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            mobile: req.body.mobile
        })
        await newUser.save()
        res.status(200).json('User created')
    } catch (err) {
        if(err.code===11000){
            err.message='Email or Mobile number is already registered'
            return next(createError(400,err.message))
        }
        next(err)
    }
}
module.exports.doLogin = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user)
            return next(createError(404, 'User not found'))
        const isPasswordcorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordcorrect)
            return next(createError(400, 'wrong password or username'))
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_KEY,{
            expiresIn:maxAge,
        })
        const { password, isAdmin, ...otherDetails } = user._doc
        res
            .cookie("access_token", token, {
                withCredentials:true,
                httpOnly: false,
                maxAge:maxAge*1000,
            })
            .status(200)
            .json({ ...otherDetails })
    } catch (err) {
        next(err)
    }
}