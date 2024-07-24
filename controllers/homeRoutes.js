const router = require("express").Router();
const {User} = require('../models/User');
const bcrypt = require('bcrypt');


router.get ('/', (req, res) => {
   res.render('homepage');
});




module.exports = router;