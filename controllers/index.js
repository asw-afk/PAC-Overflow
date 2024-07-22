
const router = require("express").Router();
const apiRoutes = require("./api");


router.use('/api', apiRoutes);
// router.use('/', homeRoutes);

router.post('/pikachu', async (req,res) => {
    try{
    const newPost = await Post.create({
        id: req.body.id,
        title: req.body.title,
        description:req.body.description
    })
    if(newPost){
        res.status(200).json(newPost);
    }} catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;