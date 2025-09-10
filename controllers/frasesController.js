const frasesService = require("../services/frasesService");

const getAllQuotes = (req, res) => {
  res.json(frasesService.getAllQuotes());
};

const getRandomQuote = (req, res) => {
  res.json(frasesService.getRandomQuote());
};

const addQuote = (req, res) => {
  const quote = req.body;
  if (!quote) {
    return res.status(400).json({ error: "debe enviar una frase" });
  }
  const quoteAdded = frasesService.addQuote(quote);
  res.status(201).json({ mensaje: "Frase añadida", frase: quoteAdded });
};

module.exports = {
  getAllQuotes,
  getRandomQuote,
  addQuote,
};
