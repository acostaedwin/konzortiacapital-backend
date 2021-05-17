//routes for users
const express = require("express");

const router = express.Router();

const publicController = require("../controllers/publicController");

router.get('/ping', publicController.ping);

module.exports = router;