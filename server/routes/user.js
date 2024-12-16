import express from 'express'
import bcryt from 'bcrypt'
const router = express.Router() // creation of a new express router

// Defining the post route for the user singup
router.post('/signup', (req, res) =>{
    const {username, email, password} = req.body;
    
})