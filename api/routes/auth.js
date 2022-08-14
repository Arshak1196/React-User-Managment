const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('Hello world from auth Router')
})

module.exports =router;