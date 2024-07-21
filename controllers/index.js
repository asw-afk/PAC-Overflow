
const router = require("express").Router();
const apiRoutes = require("./api");

router.get("/", (req, res) => {
  res.render("login");
});

router.use('/api', apiRoutes);
// router.use('/', homeRoutes);

module.exports = router;