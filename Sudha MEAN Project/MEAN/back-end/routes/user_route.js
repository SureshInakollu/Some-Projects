const express = require('express');
const router = express.Router();
const userModel = require('../models/User');
const bcrypt = require('bcrypt');
const moment = require('moment')

router.post('/login', async (req, res)=>{
    try{
        const {email, password} = req.body;
        const existUser = await userModel.findOne({email:email})
        if(!existUser){
            res.status(500).json({message:'No user found!'})
        } else{
            res.status(200).json({message:'Login successfully!',result:{email, password}})
        }     
    } catch(error){
        res.status(500).json({error:error.message})
    }
})

router.get('/getAllUsers', async (req, res)=>{
    try{
        const users = await userModel.find()
        res.json(users)
    } catch(error){
        res.status(500).json({error: error.message})
    }
})

router.post('/createuser', async(req, res) => {
    try{
        const user_details = {
            name: req.body.name,
            email: req.body.email,
            company: req.body.company,
            mobile: req.body.mobile,
            role: req.body.role,
            designation: req.body.designation,
            blood_groop: req.body.blood_groop,
            date_of_joining: req.body.date_of_joining,
            address: req.body.address,
            mail_address: req.body.mail_address,
            password: req.body.password,
            date_of_birth: req.body.date_of_birth,
            gender: req.body.gender,
        }

        const salt = await bcrypt.genSalt(10)
        await bcrypt.hash(req.body.password, salt).then(hashedPassword => {
            if(hashedPassword){
                console.log('hashed password:', hashedPassword);
                user_details.password = hashedPassword;
                console.log('User password:', user_details.password)
            }
        })
        const new_user = await userModel.create(user_details)
        res.status(200).json({message: "User created successfully!", result: new_user})
    } catch(error){
        res.status(500).json({error:error.message})
    }
})

module.exports = router