const express = require('express');
const app = express();
const PORT = 4000;

let secret = '1234';

app.get('/lock', (req, res) => {
  const seq = req.query.seq;
  res.json({
    status: seq === secret ? 'Unlocked' : 'Locked',
    length: secret.length,
  });
});

app.put('/lock', (req, res) => {
  const seq = req.query.seq;
  secret = seq;
  res.json({
    status: 'Locked',
    length: secret.length,
  });
});

app.listen(PORT, () => console.log(`http://localhost:4000`) );
