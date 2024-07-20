const router = require("express").Router();
const {User} = require('../models/User');
const bcrypt = require('bcrypt');

router.post ('/', async (req, res) => {
    try {
        const newUser = req.body

        newUser.password = await bcrypt.hash(
            req.body.password, 
            10 
        )

        const userData = await User.create (
            res.status(200)
            .json(userData)
        )

    }

    catch{
        res.status(error)
        .json(error)
    }
})

router.get ('/', async (req, res) => {
   
});

module.exports = router;