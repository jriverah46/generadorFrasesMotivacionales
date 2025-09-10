const frasesDb = require("../data/frasesDb");

const getAllQuotes = () => {
  return frasesDb;
};

const getRandomQuote = () => {
  const randomNumber = Math.floor(Math.random() * frasesDb.length);
  return frasesDb[randomNumber];
};

const addQuote = (quote) => {
  frasesDb.push(quote);
  return quote;
};

module.exports = {
  getAllQuotes,
  getRandomQuote,
  addQuote,
};
