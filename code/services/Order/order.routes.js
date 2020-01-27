const express = require('express');
const router = express.Router();
const orderController = require("./order.controller");
router.get('/ratings',orderController.ratings);
module.exports = router;