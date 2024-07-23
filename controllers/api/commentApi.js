const router= require("express").Router();
const Posts = require("../../models/Comment");
//create post request for new comment
router.post('/', async (req,res) => {
    try{
    const newComment = await Comment.create ({
     
    })
    if(newPost){
        res.status(200).json(newPost);
    }} catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router