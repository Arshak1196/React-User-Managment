const express = require('express');
const cors=require('cors');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
    .config()
const cookieParser = require('cookie-parser');

//routes
const usersRouter = require('./routes/user');
const adminRouter = require('./routes/admin');

const port = process.env.port || 8000

//mongoDB connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('Database connected')
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected')
})

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use('/', usersRouter);
app.use('/admin', adminRouter);
 
//errorHandling
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong!';
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})


app.listen(port, () => {
    connect();
    console.log(`connected to backend port: ${port}`)
})