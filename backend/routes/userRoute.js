const express = require('express');
const bcrypt = require('bcrypt')
const userRouter = express.Router();

const User = require('../models/userModal');

userRouter.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({
        username,
        email,
        password: hashedPassword
    })

    try {
        await newUser.save();
        res.send("User Registered successfully");
    } catch (error) {
        return res.status(401).json({ message: error })
    }
})
userRouter.post('/login', async (req, res) => {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({
        email,
        password
    })

    try {

    } catch (error) {
        return res.status(401).json({ message: error })
    }
})
module.exports = userRouter;