const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const cookie = require('cookie');

//Model
const userSchema = new mongoose.Schema({
    usernama:{
        type:String,
        required:[true, 'Username is Required']
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'Password is required'],
        minlength:[6, 'Password length should be 6 character long']
    },
    customerId:{
        type:String,
        default:""
    },
    subscription:{
        type:String,
        default:""
    },
});

//hashed password
userSchema.pre('save', async function(next){
    //Update
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//match password
userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

//Sign token
userSchema.methods.getSignedToken = function(res){
    const accessToken = JWT.sign(
        { id:this._id }, 
        process.env.JWT_ACCESS_SECRET, 
        { expiresIn:JWT_ACCESS_EXPIREIN }
    );
    const refreshToken = JWT.sign(
        { id:this._id }, 
        process.env.JWT_REFRESH_TOKEN, 
        { expiresIn: process.envJWT_REFRESH_EXPIREIN } 
    );
    res.cookie('refreshToken', `${refreshToken}`, {
        maxAge:86400 * 7000, 
        httpOnly:true,
    }); 
};

const User = mongoose.model('User', userSchema);

modeule.export = User;