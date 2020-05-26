import React , {Component} from 'react'
import './ListRecipes.css'
import RecipeItem from '../RecipeItem/RecipeItem'
import axios from 'axios'
import { Link } from 'react-router-dom'
class ListRecipes extends Component {
    constructor(props){
         super(props)
         this.state = {
             recipes: [],
             searchedText: ''
         }
    }

    componentDidMount() {
       axios.get('http://localhost:3001/api/recipes')
            .then((res) => {
                this.setState({
                    recipes: res.data
                })
            })
    }
    _handleSearch = (e) => {
           this.setState({
               searchedText: e.target.value
           })
    }
   
   
   

    render(){

     let filteredRecipes =  this.state.recipes.filter(
            (recipe) => {
                return recipe.title.indexOf(this.state.searchedText) !== -1
            }
        )

        return(
           <div className="col-xs-12">
               <div id="search_block" className="row">
                  <div className="input-group"> 
                  <i class="fa fa-search icon" aria-hidden="true"></i>
                   <input type="text"
                       placeholder="Cherchez ici votre recette préférée..."
                       className="searchedinput"
                       value={this.state.searchedText} 
                       onChange={this._handleSearch}
                       />               
               </div>
                   
               </div>
               <div id="block-recipes" className="row">
               <h1 className="title">Mes Recettes</h1>
               </div>
               <div className="row">
               <ul>
                    { filteredRecipes.length>0 
                      && filteredRecipes.map((recipe, index) => 
                           <RecipeItem
                               recipe={recipe}
                               key={index}
                            />
                     )}
               </ul>  
               </div>
       
               <Link className="addLink" to="/new-recipe">Ajouter une nouvelle recette</Link>
               
              
           </div>
        )
    }
}

export default ListRecipes