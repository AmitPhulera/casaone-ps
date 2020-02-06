const express = require('express');
const router = express.Router();
const orderController = require("./order.controller");
router.get('/ratings',orderController.ratings);
router.get('/populate',orderController.populate);
router.get('/',orderController.get);
module.exports = router;