const router = require('express').Router();
// import the userApi file
const userApi = require("./userApi");

// any api with /users user userRoutes file
// full api will be /api/user
router.use("/users", userApi);

module.exports = router;