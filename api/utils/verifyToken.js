const jwt = require('jsonwebtoken');
const createError = require('./error');

module.exports.verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, 'You are not authenticated!'))
    }
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if (err) return next(createError(403, 'Token is not valid!'))
        req.user = user;
        next()
    })
}

module.exports.verifyAdmin=(req,res,next)=>{
    this.verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
        }else{
            return next(createError(403,'You are not authorized'));
        }
    })
}
module.exports.verifyUser=(req,res,next)=>{
    this.verifyToken(req,res,()=>{
        if(req.user){
            next()
        }else{
            return next(createError(403,'You are not authorized'));
        }
    })
}

module.exports.protect=async(req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startWith('Bearer')){
        try {
            token=req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token,process.env.JWT_KEY )
            
        } catch (err) {
            next()
        }
    }
}