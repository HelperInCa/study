const express = require('express');
const app = express();
const PORT = 3000;

const recipes = require('./recipes');
const web = require('./recipes-web');
const handlers = require('./recipes-server');

app.use(express.static('public'));

app.get(web.ROUTES.LIST, handlers.listPageHandler(recipes));
app.get(web.ROUTES.DETAIL, handlers.detailPageHandler(recipes));
app.get(web.ROUTES.CREATE, handlers.createPageHandler(recipes));
app.post(web.ROUTES.CREATE_ACTION, express.urlencoded({ extended: false }), handlers.createActionHandler(recipes));

app.get(web.SERVICES.LIST, handlers.listServiceHandler(recipes));


app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );

