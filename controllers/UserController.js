const User = require("../models/User")


const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const jwtSecret = process.env.JWT_SECRET

//gerendo token
const generateToken = (id) => {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: "7d",
    })
}


const register = async (req, res) => {
    res.send("Registrado")
}


module.exports = {
    register,
}