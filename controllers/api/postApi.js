const router= require("express").Router();
const Post = require("../../models/Posts");
const User= require("../../models/User");
const Comment = require("../../models/Comment");

//post request for creating new post
router.post('/newPost', async (req,res) => {
    try{ console.log("ooo")
        //create new post object from user input
    const newPost = await Post.create({
        title: req.body.title,
        game: req.body.game,
        body: req.body.body,
        votes: req.body.votes,
        user_id:req.body.user_id
    });
      res.status(200).json({message:"Post Post Posting Post"});
      console.log(newPost)
    }
     catch(err) {
        res.status(500).json(err);
    }
})

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
                },           
            ],
        });  
         
    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log('this data is clean *******************************************');
    console.log(posts);
    res.render("post",{posts, logged_in: req.session.logged_in});

}catch(err){
    console.log(err);
    res.status(500).json(err);


}
});
module.exports = router