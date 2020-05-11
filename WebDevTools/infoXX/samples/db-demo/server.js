const express = require('express');
const app = express();
const PORT = 4000;
const loki = require('lokijs');

let users;

const db = new loki('example.db', {
  autoload: true,
  autosave: true,
  autosaveInterval: 4000,
  autoloadCallback: () => {
    users = db.getCollection('users') || db.addCollection('users');
  }
});

app.use( express.static('./public'));
app.get('/', (req, res) => {
  const name = req.query.name;
  const user = users.findOne({ name });
  const page = `
   <div class="add">
     <div>Name: <input class="name"></div>
     <div>Age: <input class="age"></div>
     <button class="to-add">Add</button>
     <div class="add-status"></div>
   </div>
   `;
  const userData = user ? ` ${user.name} is ${user.age}` : `User not found`;
  const wrap = `<!DOCTYPE html> <html><head></head><body> ${userData} ${page} <script src="db.js"></script></body></html>`;
  res.send(wrap);
});

app.post('/user', express.json(), (req, res) => {
  const user = req.body;
  if( !( user && user.name) ) {
    res.status(400).json({ error: 'need-name', message: `'name' property is required`});
    return;
  }

  if(users.findOne({name: user.name})) {
    res.status(409).json({ error: 'name-exists', message: `'${user.name} already exists'`});
    return;
  }

  users.insert(user);
  res.sendStatus(200);
});

// Add a form that will let you add a user using POST
// USING fetch()
// That gets added to the DB
// Use the lokijs.org docs


app.listen(PORT, () => `listening on http://localhost:${PORT}`);
