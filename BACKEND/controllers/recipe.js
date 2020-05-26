const Recipe = require('../models/Recipe')
exports.createRecipe = (req, res, next) => {
    delete req.body._id;
    const recipe = new Recipe({
        ...req.body
    });
    recipe.save()
          .then(() => res.status(201).json({ message:'Objet enregistré!'}))
          .catch((error) => res.status(400).json({ error }))
}

exports.updateRecipe = (req, res, next) => {
    Recipe.updateOne({ _id: req.params.id}, { ...req.body, _id: req.params.id})
          .then(() => res.status(200).json({ message: 'Objet modifié !'}))
          .catch((error) => res.status(400).json({ error }))
}

exports.deleteRecipe = (req, res, next) => {
    Recipe.deleteOne({ _id: req.params.id})
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch((error) => res.status(400).json({ error }))
}

exports.getRecipe = (req, res, next) => {
    Recipe.findOne({ _id: req.params.id })
          .then((recipe) => res.status(200).json(recipe))
          .catch((error) => res.status(400).json({error}))
}

exports.findRecipe = (req, res, next) => {
    Recipe.findOne({ _id: req.params.id })
          .then((recipe) => res.status(200).json(recipe))
          .catch((error) => res.status(400).json({error}))
}

exports.getAllRecipes = (req, res, next) => {
    Recipe.find()
          .then((recipes)=> res.status(200).json(recipes))
          .catch((error) => res.status(400).json({error}))
}

