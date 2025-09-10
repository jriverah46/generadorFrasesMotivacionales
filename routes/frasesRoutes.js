const frasesController = require("../controllers/frasesController");
const express = require("express");
const router = express.Router();

router.get("/quotes", frasesController.getAllQuotes);
router.get("/quotes/random", frasesController.getRandomQuote);
router.post("/quotes", frasesController.addQuote);

module.exports = router;
