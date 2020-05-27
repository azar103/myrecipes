import React from 'react';

import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Authentification from './components/authentification/authentification';
import ListRecipes from './components/ListRecipes/ListRecipes';
import SingleRecipe from './components/SingleRecipe/SingleRecipe';
import RecipeForm from './components/RecipeForm/RecipeForm';
import EditForm from './components/EditForm/EditForm';
import UserForm from './components/UserForm/UserForm';
import Dahsboard from './components/Dashboard/Dashboard'
import Favorites from './components/Favorites/Favorites';

function App() {
  return (
   <Router>
  
       <div className="container">
         <Switch>
           <Route  path="/recipes/view/:id" component={SingleRecipe}  />
           <Route  path="/edit-recipe/:id" component={EditForm}  />
           <Route  path="/new-recipe" component={RecipeForm} /> 
           <Route path="/dashboard" component={Dahsboard}/>
           <Route path="/favorites" component={Favorites}/>
           <Route  path="/recipes" component= {ListRecipes}  />
           <Route path="/auth" component={Authentification} />
           <Route path="/signup" component={UserForm}/>
           <Route path="" component={Authentification} exact />
         </Switch>
         </div>  
   </Router>     
  );
}

export default App;
