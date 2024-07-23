const router = require('express').Router();
// import the userApi file
const userApi = require("./userApi");
//import postApi file??? 
const postApi =require("./postApi"); 

// any api with /users user userRoutes file
// full api will be /api/user
router.use("/users", userApi);

router.use("/posts", postApi);

module.exports = router;