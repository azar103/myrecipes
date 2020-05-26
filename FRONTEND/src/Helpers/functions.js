
export function  getRecipe(array, id) {
      const recipeObject = array.find((recipe) => recipe.id === id);
      return recipeObject;
}