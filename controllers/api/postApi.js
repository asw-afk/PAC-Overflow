const router= require("express").Router();
const Post = require("../../models/Posts");
const User= require("../../models/User");
const Comment = require("../../models/Comment");
const session = require("express-session");

//post request for creating new post
router.post('/newPost', async (req,res) => {
    try{ 
        //create new post object from user input
    const newPost = await Post.create({
        title: req.body.title,
        // game: req.body.game,
        body: req.body.body,
        votes: req.body.votes,
        user_id:req.body.user_id
    });
      res.status(200).json({message:"Post Post Posting Post"});
    }
     catch(err) {
        res.status(500).json(err);
    }
})


router.patch("/post", async (req, res)=>{
    console.log("I am in the patch request");
    const id = req.body.id;
    const newVote = req.body.votes;
    console.log(id);
    console.log(newVote);

    try{
        const post = await Post.findByPk(id);
        if(post){
            const newUpdate = await Post.update({votes:newVote},{
                where: {
                    id: id
                }
            })
            res.status(200).json(newUpdate);
        }else{
            res.status(404).json({message: "post not found"})
        }
        

    }catch(err){
        res.status(500).json(err)
    }

})

module.exports = router