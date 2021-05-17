//routes for users
const express = require("express");
const router = express.Router();
const clasificationController = require("../controllers/clasificationController");


router.post('/', clasificationController.create);
router.get('/', clasificationController.read);
router.put('/:id', clasificationController.update);
router.delete('/:id', clasificationController.delete);

module.exports = router;