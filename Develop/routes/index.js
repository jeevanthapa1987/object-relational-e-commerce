
const router = require('express').Router();

// Import API routes
const apiRoutes = require('./api');

// API routes
router.use('/api', apiRoutes);

module.exports = router;
