const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./models/User');
const user_router = require('./routes/user_route')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/user', user_router)

// Database connection----------------
mongoose.connect("mongodb://localhost:27017/heka-timesheet")
.then(()=>{
    console.log("Database connected successfully!")
})
.catch((error)=>{
    console.log("Error while creating DB!")
})

// routes---------------------------
app.get('/', (req, res)=>{
    res.send("Welcome to Express!")
})

const port = 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
})









// creating schema for user:------------

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     company: String
// })

// creating model:-----------------------

// const userModel = mongoose.model('users', userSchema)

// creating user details using model:-------------

// const newUser = new userModel({
//     name: "Sravanthi",
//     email: "Sravanthi@gmail.com",
//     company: "Heka-Solutions",
//     mobile: 1234567890,
//     role: {
//         admin: "venu@gmail.com",
//         employee: "Sravanthi@gmail.com",
//         manager: "venu@gmail.com"
//     },
//     designation: "developer",
//     blood_groop: "O+",
//     date_of_joining: new Date(),
//     address: "hyderabad",
//     mail_address: "Sravanthi@gmail.com",
//     password: "welcome@123",
//     date_of_birth: "01/01/2000",
//     gender: "female"
// })

// newUser.save()
// .then((user)=>{
//     console.log('user created successfully!', user)
// })
// .catch((error)=>{
//     console.log('Error while creating user!', error)
// })

// deleting user:-

// userModel.findOneAndDelete({name: "Avanthi"})
// .then((user)=>{
//     console.log('user deleted successfully!', user)
// })
// .catch((error)=>{
//     console.log('Error while deleted user!', error)
// })

// app.get('/getAllUsers', async (req, res)=>{
//     try{
//         const users = await userModel.find()
//         res.json(users)
//     } catch(error){
//         res.status(500).json({error: error.message})
//     }
//---------------------(or)---------------------
//     // res.send("users")
//     // userModel.find({})
//     // .then((users)=>{
//     //     res.send(users)
//     // })
//     // .catch((error)=>{
//     //     console.log(error.message)
//     // })
// })

// app.post('/createuser', async(req, res) => {
//     try{
//         const new_user = await userModel.create(req.body)
//         res.status(200).json({message: "User created successfully!", result: new_user})
//     } catch(error){
//         res.status(500).json({error:error.message})
//     }
//---------------------(or)---------------------
// //    userModel.create(req.body)
// //     .then((users) => {
// //         res.status(200).json({status:'User created successfully!', result:users})
// //     })
// //     .catch((err) => {
// //         res.status(500).json(err)
// //     })
// })