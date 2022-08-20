const mongoose =require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        requires:[true,'Email is required'],
        unique:true
    },
    email:{
        type:String,
        required:[true,'Password is required'],
        unique:true
    },
    mobile:{
        type:Number,
        required:[true,'Mobile number is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports = mongoose.model('User', UserSchema);