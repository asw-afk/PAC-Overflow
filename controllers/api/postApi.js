const router= require("express").Router();
const Post = require("../../models/Posts");
//post request for creating new post
router.post('/newPost', async (req,res) => {
    try{ console.log("ooo")
        //create new post object from user input
    const newPost = await Post.create({
        title: req.body.title,
        game: req.body.game,
        body: req.body.body,
        votes: req.body.votes,//this is temporary, actual value will be an INT 
        user_id:req.body.user_id
    });
      res.status(200).json({message:"Post Post Posting Post"});
      console.log(newPost)
    }
     catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router