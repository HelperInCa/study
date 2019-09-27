const express = require('express');
const app = express();
const PORT = 3000;

const people = { bob: { name: 'bob', age: 32 } };

app.use(express.static('public'));

app.get('/people/', (req,res) => {
  res.json(Object.keys(people));
});

app.get('/people/:name', (req, res) => {
  const name = req.params.name;
  if( !people[name] ) {
    res.status(404).json({ error: `No such name: ${name}`});
  } else {
    res.json(people[name]);
  }
});

app.post('/people/', express.json(), (req, res) => {
  const name = req.body.name;
  if(!name) {
    res.status(400).json({ error: `'name' property is required`});
  } else if (people[name]) {
    res.status(409).json({ error: `name ${name} already exists`});
  } else {
    people[name] = req.body;
    res.sendStatus(200);
  }
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`) );

