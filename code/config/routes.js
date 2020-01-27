/**
 * @module routes
 * Contains info about all the services in this app
 * And will route the request to the service's individual route handlers
 */
const express = require('express');
const router = express.Router();
const orderRoutes = require("../services/Order/order.routes");
router.use('/order/v1',orderRoutes);

module.exports = router;