const recipes = {
  1: {
    id: 1,
    title: 'ramen',
    ingredients: 'ramen',
    directions: 'heat'
  },
};
let id = 1;
const nextId = () => { id +=1; return id; };

const addRecipe = ({ title, instructions, ingredients }) => {
  if(title && instructions && ingredients) {
    const id = nextId();
    recipes[id] = { id, title, instructions, ingredients };
  }
  return id;
};

module.exports = {
  recipes,
  addRecipe,
};
