const router = require('express').Router();

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;