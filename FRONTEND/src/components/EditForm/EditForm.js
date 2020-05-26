import React , {Component} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


class EditForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        this.state= {
            title: '',
            category: '',
            image: '',
            ingredients: '',
            steps: '',
            redirectTo: false
        }
    
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/recipes/'+this.props.match.params.id)
             .then((res) => {
                 this.setState({
                     title: res.data.title,
                     category: res.data.category,
                     image: res.data.image,
                     ingredients: res.data.ingredients.join(','),
                     steps: res.data.steps.join(',')
                 })
             })
    }

    _handleChangeName = (e) => {
        this.setState({ title: e.target.value })
    }

    _handleChangeCategory = (e) => {
        this.setState({ category: e.target.value })
    }

    _handleChangeImage = (e) => {
        this.setState({ image: e.target.value })
    }

    _handleChangeIngredients = (e) => {
        this.setState({ ingredients: e.target.value })
    }

    _handleChangeSteps = (e) => {
        this.setState({ steps: e.target.value})
    }

    

    _editRecipe= (e) => {
        e.preventDefault();
        const newRecipe = {
            title: this.state.title,
            category: this.state.category,
            image: this.state.image,
            ingredients: this.state.ingredients.split(','),
            steps: this.state.steps.split(',')
        }
        axios.put('http://localhost:3001/api/recipes/'+this.props.match.params.id, newRecipe)
              .then((res) => {
                  this.setState({
                      redirectTo: true
                  })
              }) 
      
    }

    

    render(){
        console.log(this.state.ingredients)
        if(this.state.redirectTo) {
            return(
                <Redirect to="/recipes" />
            )
        } else {
            return(
                   <form className="col-sm-8 col-sm-offset-2" onSubmit={this._editRecipe}>
                   <div className="form-group">
                     <label htmlFor="title">Nom de la recette</label>
                     <input    type="text" 
                               id="title"  
                               className="form-control" 
                               placeholder="Entrez le nom de la recette"
                               value= {this.state.title}
                               onChange={this._handleChangeName}
                               />
                   </div>
                   <div className="form-group">
                     <label htmlFor="category">Catégorie</label>
                     <input    type="text" 
                               id="category"  
                               className="form-control" 
                               placeholder="Entrez le nom de la catégorie"
                               value={this.state.category}
                               onChange={this._handleChangeCategory}
                               />
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input     type="text" 
                               id="image"  
                               className="form-control" 
                               placeholder="Entrez l'url de l'image"
                               value={this.state.image}
                               onChange={this._handleChangeImage}
                               />
                 </div> 
                 <div className="form-group">
                    <label htmlFor="ingredients">Les Ingredients</label>
                    <textarea   className="form-control" 
                                rows="4"
                                placeholder="Ajouter un ingredient par ligne"
                                value={this.state.ingredients}
                                onChange={this._handleChangeIngredients}
                                />
                 </div> 
                 <div className="form-group">
                    <label htmlFor="steps">Les Etapes</label>
                    <textarea   className="form-control" 
                                rows="4"  
                                placeholder="Ajouter une étape par ligne" 
                                value={this.state.steps}
                                onChange={this._handleChangeSteps}
                                />
                 </div> 
                 <button className="btn btn-primary" type="submit" value="Soumettre" >Soumettre</button>
                 </form> 
                
             )
        }
        
    }
}

export default EditForm