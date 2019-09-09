const express = require('express');
const app = express();
const PORT = 4000;
const common = require('./common');


app.use(express.static('server/public'));

const validWords = [ 'EAT', 'TEA', 'PET' ];

const games = {};
let id = 1;
const nextId = () => id++;

const pickRandomWord = () => {
  return validWords[Math.floor(Math.random() * validWords.length)];};

const startGame = () => {
  const id = nextId();
  const word = pickRandomWord();
  games[id] = word;
  return id;
};

app.post('/game', (req, res) => {
  const id = startGame();
  res.json({ id, games });
});

app.get('/game/:id/:guess', (req, res) => {
  const id = req.params.id;
  const guess = req.params.guess;
  setTimeout( () => {
    res.json({ result: common(games[id], guess.toUpperCase()) } );
  }, 3000);
});

app.get('/words', (req, res) => {
  res.json(validWords);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );
