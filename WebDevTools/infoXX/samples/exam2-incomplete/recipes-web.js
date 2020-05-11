const ROUTES = {
  LIST: '/',
  DETAIL: '/recipe',
  CREATE: '/new',
  CREATE_ACTION: '/new',
};

const SERVICES = {
  LIST: '/recipes',
  DETAIL: '/recipes/:id',
  CREATE: '/recipes',
};

const wrapPage = content => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <link rel="stylesheet" href="/recipes.css"/>
  </head>
  <body>
    ${content}
    <script src="/recipes.js"></script>
  </body>
  </html>
  `;
};

const makeListLink = () => `${ROUTES.LIST}`;

const listLink = () => `<a href="${makeListLink()}">Return to Home</a>`;

const makeDetailLink = ({ recipe }) => {
  return `${ROUTES.DETAIL}?id=${recipe.id}`;
};

const makeCreateLinkButton = () => {
  return `
    <form action="${ROUTES.CREATE}">
    <button type="submit">Add New Recipe</button>
    </form>
  `;

};

const listRecipes = ({ recipes }) => {
  const list = Object.values(recipes).map( recipe =>
    `<li><a href="${makeDetailLink({ recipe })}">${recipe.title}</a></li>`
  );

  return `
    <ul class="recipes">
      ${ list }
    </ul>
  `;
};

const listContent = ({ model }) => {
  return `
    <div class="recipe-list">
      ${ listRecipes({ recipes: model.recipes }) }
    </div>
    ${makeCreateLinkButton()}
  `;
};

const detailContent = ({ model, id }) =>{
  const recipe = model.recipes[id];
  return `
    ${listLink()}
    <div class="recipe-detail">
      <h1>${recipe.title}</h1>
      <div class="recipe-body">
        <span class="label">Ingredients</span>
        <div class="content ingredients">${recipe.ingredients}</div>
        <span class="label">Directions</span>
        <div class="content instructions">${recipe.instructions}</div>
      </div>
    </div>
    ${ makeCreateLinkButton() }
  `;
};

const createContent = ({ model }) => {
  return `
    ${listLink()}
    <div class="recipe-create">
      <h2>Add a recipe
      <form action="${ROUTES.CREATE_ACTION}" method="POST">
        <fieldset class="title"><label>Title<input name="title" class="title"></label></fieldset>
        <fieldset class="ingredients"><label>Ingredients</label><textarea name="ingredients" class="ingredients"></textarea></fieldset>
        <fieldset class="instructions"><label>Directions</label><textarea name="instructions" class="instructions"></textarea></fieldset>
        <button type="submit">Add New Recipe</button>
      </form>
    </div>
  `;
};


module.exports = {
  ROUTES,
  SERVICES,
  wrapPage,
  listLink,
  makeListLink,
  makeDetailLink,
  makeCreateLinkButton,
  listRecipes,
  listContent,
  detailContent,
  createContent,
};
