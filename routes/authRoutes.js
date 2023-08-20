const express = require('express')
const { registerController, longinController, logoutController } = require('../controllers/authController')

//Router Object
const router = express.Router()

//Routes
//Register
router.post('/register', registerController);

//Login
router.post('/login', longinController);

//Logout 
router.post('/logout', logoutController);

module.exports = router