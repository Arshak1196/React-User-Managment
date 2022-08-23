const mongoose =require('mongoose')
const Schema = mongoose.Schema;

const FormSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
    },
    address:{
        type:String,
        required:[true,'Address is required'],
    },
    city:{
        type:String,
        required:[true,'city is required'],
    },
    state:{
        type:String,
        required:[true,'state is required'],
    },
    email:{
        type:String,
        required:[true,'Email is required'],
    },
    phone:{
        type:Number,
        required:[true,'Phone number is required'],
    },
    companyName:{
        type:String,
        required:[true,'Company name is required'],
    },
    logo:{
        type:String,
    },
    ques1:{
        type:String,
        required:[true,'Fill all the questions.']
    },
    ques2:{
        type:String,
        required:[true,'Fill all the questions.']
    },
    ques2:{
        type:String,
        required:[true,'Fill all the questions.']
    },
    ques3:{
        type:String,
        required:[true,'Fill all the questions.']
    },
    ques4:{
        type:String,
        required:[true,'Fill all the questions.']
    },
    ques5:{
        type:String,
        required:[true,'Fill all the questions.']
    },
    ques6:{
        type:String,
        required:[true,'Fill all the questions.']
    },
    ques7:{
        type:String,
        required:[true,'Fill all the questions.']
    },
    ques8:{
        type:String,
        required:[true,'Fill all the questions.']
    },
    ques9:{
        type:String,
        required:[true,'Fill all the questions.']
    },
    ques10:{
        type:String,
        required:[true,'Fill all the questions.']
    },
    incubation:{
        type:String,
        required:[true,'Fill all the questions.']
    },

},{timestamps:true})

module.exports = mongoose.model('Form', FormSchema);