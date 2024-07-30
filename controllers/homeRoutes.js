const router = require("express").Router();
const bcrypt = require('bcrypt');
const Post = require("../models/Posts");
const User= require("../models/User");
const Comment = require("../models/Comment");

router.get("/", async (req, res)=>{
   try{
       const postData = await Post.findAll({
           include:[
               {
                   model:User,
                   attributes:['id','name'],
               },      
               {
                model:Comment,
                attributes:['id','body'],
                include: [
                 {
                     model: User,
                     attributes: ['name'], 
                   
                 }
                ]
            },               
           ],
       });  

    
        
   // Serialize data so the template can read it
   const posts = postData.map((post) => post.get({ plain: true }));
 
   res.render("post",{posts, user_name:req.session.name, logged_in: req.session.logged_in});

}catch(err){
   console.log(err);
   res.status(500).json(err);
}
});




module.exports = router;