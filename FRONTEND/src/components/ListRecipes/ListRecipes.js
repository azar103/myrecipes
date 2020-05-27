import React , {Component} from 'react'
import './ListRecipes.scss'
import RecipeItem from '../RecipeItem/RecipeItem'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
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
          <div className="container">   
           <Header />
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
               <div  className="row">
               <h2 className="title">Mes Categories</h2>
               <div className="categories_block">
               <div className="col-xs-3">
                     <img src="https://foodhub.modeltheme.com/wp-content/uploads/2020/01/burger_categ-400x500.jpg"
                      height="300" width="250"
                      className="categoryImg"
                     />
                     <p>Sweets</p>
               </div>
               <div className="col-xs-3">
                   <img src="https://foodhub.modeltheme.com/wp-content/uploads/2020/01/drinks_categ-400x500.jpg" 
                         height="300" width="250"
                         className="categoryImg"
                   />
                    <p>Burgers</p>
               </div>
               <div className="col-xs-3">
                   <img src="https://foodhub.modeltheme.com/wp-content/uploads/2020/01/sweets_categ-400x500.jpg" 
                        height="300" width="250"
                        className="categoryImg"
                   />
                   <p>Drinks</p>
               </div>
               <div className="col-xs-3">
                   <img src="https://foodhub.modeltheme.com/wp-content/uploads/2020/01/pizza_categ-400x500.jpg" 
                          height="300" width="250"
                          className="categoryImg"
                   />
                   <p>Pizzas</p>
               </div>
               </div>
               </div>
               <div className="row">
                    
               </div>
               <div id="block-recipes" className="row">
               <h2 className="title">les  plus récentes</h2>
               </div>
               <div className="row">
               <ul>
                    { filteredRecipes.length>0 
                      ? filteredRecipes.map((recipe, index) => 
                           <RecipeItem
                               recipe={recipe}
                               key={index}
                            />
                     ): <h1 className="no-recipes-found"> No recipes found</h1>}
               </ul>  
               </div>
       
               <Link className="addLink" to="/new-recipe">+</Link>
               
              
           </div>
           </div>   
        )
    }
}

export default ListRecipes