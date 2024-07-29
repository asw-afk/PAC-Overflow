const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");

// post request for Creating new user
router.post("/signup", async (req, res) => {
  try {
    console.log("I am here");
    const newUser = req.body;
    console.log(newUser);
    // hashing the password that is in the object of new user
    // newUser.password = await bcrypt.hash(req.body.password, 8);
    // after hashing the password create and store the new user
    console.log(newUser);
    const createdUser = await User.create(newUser);

    req.session.save(() => {
      req.session.user_id = createdUser.id;
      req.session.name= createdUser.name;
      req.session.logged_in = true;
        console.log(req.session.user_id)
       res.status(200).json({message:'account created successfully'});
      
      });
    // res.status(200).json({ message: "user created successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
});

// login post request
// full url api/users/login
router.post("/login", async (req, res) => {
  try {
    // assigning the user login to userLoginInfo
    const userLoginInfo = await User.findOne({
      where: { email: req.body.email },
    });

    // checking if the user inputed data, if no info return error with message
    if (!userLoginInfo) {
      return res
        .status(404)
        .json({ message: "login failed: no account with such email" });
    } 

    // if the user has all login info check if the password correct
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      userLoginInfo.password
    );

    // if the passwod does not match the user password in database
    if (!isValidPassword) {
      res.status(400).json({ message: "password is invalid" });
      return;
    }

    req.session.save(() => {
      req.session.id = userLoginInfo.id;
      req.session.name = userLoginInfo.name;
      
      req.session.logged_in = true;

      console.log("This is the name of the user logged in");
      console.log(req.session.name);
      console.log("This should be the loggin info");
      console.log(userLoginInfo);

      
      res.json({ user: req.session, logged_in: req.session.logged_in,message: "You are now logged in!" });
       
       
      });

  } catch (err) {
    res.status(500).json({ message: "500 internal server error" });
  }
});


   //********************************Get request  */
   // full api: /api/users/
router.get("/login", (req, res)=>{
    res.render("login")
})
router.get("/signup", (req, res)=>{
    res.render("signup")
})
// router.get("/post", (req, res)=>{
//     res.render("post")
// })
router.get("/homepage", (req, res)=>{
    res.render("homepage")
})

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
      req.session.destroy(() => {
          res.status(204).end();
      });
  } else {
      res.status(404).end();
  }
});


module.exports = router;
