import React  from 'react'
import './RecipeItem.scss'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'


class RecipeItem extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state= {
         redirectTo:false
    }
  }
  _deleteRecipe = () => {
    axios.delete('http://localhost:3001/api/recipes/'+this.props.recipe._id)
         .then(() => {
           this.setState({
             redirectTo: true
           })
         })
  }
  render() {
    const {recipe} = this.props
    if(this.state.redirectTo) {
      return(
        <Redirect to="/recipes"/>
      )
    }else {
      return(

          <div className="col-md-4 col-sm-6 recipe" >
                  <Link className="link-wrapper" to={`/recipes/view/${recipe._id}`}>  
          <li className="list-group-item list-group-item-header"
          style={{backgroundImage: `url(${recipe.image})`}}></li>
        
        <li className="list-group-item list-group-item-title">
            <p className="title-recipe">{recipe.title}</p>
        </li>
        </Link>
        <li className="list-group-item list-group-item-title">
            <btn-group>
              <Link to={`/edit-recipe/${recipe._id}`}>
               <button className="btn btn-success">
                   modifier
               </button>
               </Link> 
               <button id="delete" className="btn btn-danger" onClick={this._deleteRecipe}>
                 supprimer
               </button>
            </btn-group>
        </li>
        </div>
      
      )
    }
    }
    
}
      

  
export default RecipeItem;