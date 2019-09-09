const recipeWeb = require('./recipes-web');
const { ROUTES, wrapPage, listContent, detailContent, createContent } = recipeWeb;

const listPageHandler = model => {
  return (req, res) => {
    res.send(wrapPage(listContent({ model })));
  };
};

const detailPageHandler = model => {
  return (req, res) => {
    const id = req.query.id;
    if(!id) {
      return res.redirect(ROUTES.LIST);
    }
    res.send(wrapPage(detailContent({ model, id })));
  };
};

const createPageHandler = model => {
  return (req, res) => {
    res.send(wrapPage(createContent({model})));
  };
};

const createActionHandler = model => {
  return (req, res) => {
    const {title, ingredients, instructions } = req.body;
    model.addRecipe({ title, ingredients, instructions });
    res.redirect(ROUTES.LIST);
  };
};

const listServiceHandler = model => {
  return (req, res) => {
    res.json(model.recipes);
  };
};

module.exports = {
  listPageHandler,
  detailPageHandler,
  createPageHandler,
  createActionHandler,
  listServiceHandler,
};

