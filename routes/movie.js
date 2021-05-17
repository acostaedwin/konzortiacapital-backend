//routes for users
const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");


router.post('/', movieController.create);
router.get('/', movieController.read);
router.put('/:id', movieController.update);
router.delete('/:id', movieController.delete);

module.exports = router;