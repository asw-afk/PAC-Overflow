const router = require('express').Router();
// import the Api files
const userApi = require("./userApi");
const postApi =require("./postApi");
const commentApi=require("./commentApi"); 

// any api with /users user userRoutes file
// full api will be /api/user
router.use("/users", userApi);

router.use("/posts", postApi);

router.use("/comments", commentApi);

module.exports = router;