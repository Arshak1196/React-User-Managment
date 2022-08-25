const User = require('../models/user')
const bcrypt = require('bcryptjs');
const createError = require('../utils/error');
const jwt = require('jsonwebtoken')
const maxAge = 3 * 24 * 60 * 60

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
        if(err=='Error: Illegal arguments: undefined, string'){
            err.message='Please fill all the fields'
            return next(createError(400,err.message))
        }
        if (err.code === 11000) {
            err.message = 'Email or Mobile number is already registered'
            return next(createError(400, err.message))
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
            return next(createError(400, 'Wrong password or username'))
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_KEY, {
            expiresIn: maxAge,
        })
        const { password, isAdmin, ...otherDetails } = user._doc
        res
            .cookie("access_token", token, {
                withCredentials: true,
                httpOnly: false,
                maxAge: maxAge * 1000,
            })
            .status(200)
            .json({ ...otherDetails,token })
    } catch (err) {
        next(err)
    }
}
module.exports.userHome = (req, res, next) => {
    try {
        res.status(200).json({ status: true })
    } catch (err) {
        next(err)
    }
}
module.exports.submitForm = async (req, res, next) => {
    const applicaion={
        name:req.body.name,
        address:req.body.address,
        city:req.body.city,
        state:req.body.state,
        email:req.body.email,
        phone:req.body.phone,
        companyName:req.body.companyName,
        teamAndBackground:req.body.teamAndBackground,
        companyAndProduct:req.body.companyAndProduct,
        problem:req.body.problem,
        solution:req.body.solution,
        propositionToCustomer:req.body.propositionToCustomer,
        cometativeAdvantage:req.body.cometativeAdvantage,
        revenueModel:req.body.revenueModel,
        potentialMarket:req.body.potentialMarket,
        marketPlan:req.body.marketPlan,
        incubation:req.body.incubation,
        businessProposal:req.body.businessProposal,
        status:"new",
        application:true,
    }
    try {
        const isform =await User.findOne({_id:req.body.userId,'application.application':true})
        if(!isform){
            const form = await User.findByIdAndUpdate(req.body.userId,
                { $set: {application:applicaion} }
            )
            res.status(200).json(form)
        }else{
            res.status(400).json("Already submitted the form")
        }
    } catch (err) {
        next(err)
    }
}