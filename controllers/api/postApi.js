const router= require("express").Router();
const Posts = require("../../models/Posts");
const Post = new Posts.Post

router.post('/pikachu', async (req,res) => {
    try{
    const newPost = await Post.create ({
     
        title: req.body.title,
        body: req.body.body
    })
    if(newPost){
        res.status(200).json(newPost);
    }} catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router