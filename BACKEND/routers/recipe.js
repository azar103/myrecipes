const express = require('express')
const route = express.Router()
const recipeCtrl = require('../controllers/recipe')
route.get('/', recipeCtrl.getAllRecipes)
route.post('/', recipeCtrl.createRecipe)
route.put('/:id', recipeCtrl.updateRecipe)
route.delete('/:id', recipeCtrl.deleteRecipe)
route.get('/:id', recipeCtrl.getRecipe)


module.exports = route
