const router= require("express").Router();
const bcrypt =require("bcrypt");
const User = require("../../models/User");

// post request for Creating new user
router.post('/signup', async(req, res) =>{
    try{
        console.log("I am here");
        const newUser = req.body;
        console.log(newUser);
        // hashing the password that is in the object of new user
        newUser.password = await bcrypt.hash(req.body.password, 8);
        // after hashing the password create and store the new user
        console.log(newUser);
        const user = await User.create(newUser);
        res.status(200).json({message:"user created successfully"});

    }catch(err){
        res.status(400).json(err)

    }
});

// login post request 
// full url api/users/login
router.post("/login", async(req,res) =>{
    try{
       // assigning the user login to userLoginIngo
       console.log(req.body.email);
       const userLoginInfo = await User.findOne({where:{email: req.body.email}});
       console.log(userLoginInfo);
   
       // checking if the user inputed data, if no info return erorr with message
       if(!userLoginInfo){
          return res.status(404).json({message: "login failed: please enter your login info"});
       };
   
       // if the usre has all login info check if the password correct
       const isValidPassword = await bcrypt.compare( req.body.password, userLoginInfo.password);
   
       // if the passwod does not match the user password in database 
       if(!isValidPassword){
         return  res.status(400).json({message:'password is invalid'})
       }
   
       // if the login infor matched the one in database, allow user to login in
       res.status(200).json({message: "logged in successfully"})
    }catch(err){
       res.status(500).json({message:"500 internal server error"})
   
    }
   })
   //********************************Get request  */
   // full api: /api/users/
router.get("/login", (req, res)=>{
    res.render("login")
})
router.get("/signup", (req, res)=>{
    res.render("signup")
})
router.get("/post", (req, res)=>{
    res.render("post")
})
router.get("/homepage", (req, res)=>{
    res.render("homepage")
})


module.exports = router;