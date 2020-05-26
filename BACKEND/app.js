const express = require('express');
const app = express();
const mongoose = require('mongoose');
const recipeRouter = require('./routers/recipe')
const authRouter = require('./routers/user')
const bodyParser = require('body-parser');
mongoose.connect('mongodb+srv://will:passwordmongodb@cluster0-8ydky.mongodb.net/test?retryWrites=true&w=majority',
                 {
                     useNewUrlParser: true,
                     useUnifiedTopology: true
                 })
                 .then(() => console.log('Connexion à MongoDB réussie !'))
                 .catch(() => console.log('Connexion à MongoDB échouée'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})
app.use(bodyParser.json());
app.use('/api/recipes', recipeRouter)
app.use('/api/auth', authRouter)
module.exports = app;