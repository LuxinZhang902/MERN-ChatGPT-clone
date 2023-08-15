const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

//Model
const userSchema = new mongoose.Schema({
    
})

const User = mongoose.model('User', userSchema)

modeule.export = User;