
const router = require('express').Router();

// Import category routes
const categoryRoutes = require('./category-routes');
// Import product routes
const productRoutes = require('./product-routes');
// Import tag routes
const tagRoutes = require('./tag-routes');

// Prefix routes
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
