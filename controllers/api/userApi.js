const router= require("express").Router();
const bcrypt =require("bcrypt");
const User = require("../../models/User");

// post request for Creating new user
router.post('/', async(req, res) =>{
    try{
        console.log("I am here");
        const newUser = req.body;
        console.log(newUser);
        // hashing the password that is in the object of new user
        newUser.password = await bcrypt.hash(req.body.password, 8);
        // after hashing the password create and store the new user
        console.log(newUser);
        const user = await User.create(newUser);
        res.status(200).json(user);

    }catch(err){
        res.status(400).json(err)

    }
});

module.exports = router;