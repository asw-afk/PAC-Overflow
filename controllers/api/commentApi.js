const router= require("express").Router();
const Comment = require("../../models/Comment");
//create post request for new comment
router.post('/newComment', async (req,res) => {
    console.log(
        req.body.body,
        req.body.votes,
        req.body.user_id,
        req.body.post_id
    )
    try{ //console.log("ooo")
        //create new comment object from user input
    const newComment = await Comment.create({
        body:req.body.body,
        votes:req.body.votes,
        user_id:req.body.user_id,
        post_id:req.body.post_id
    });
      res.status(200).json({message:"comment posted!"});
      console.log(id)
    }
     catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router