import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import { getRecipe } from '../../Helpers/functions';
import recipes from '../../Helpers/recipes';
import './SingleRecipe.scss'
import axios from 'axios'
class SingleRecipe extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            category: '', 
            image: '',
            ingredients: [],
            steps: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/recipes/'+this.props.match.params.id)
             .then((res) => {
                 this.setState({
                     title: res.data.title,
                     category: res.data.category,
                     image: res.data.image,
                     ingredients: res.data.ingredients,
                     steps: res.data.steps
                 })
              
             }) 
               
    }
    
     
    render(){
        console.log(JSON.stringify(this.state.ingredients))
        return(
            <div class="col-md-12">
            <div class="row">
            <div class="col-md-12" >
               <h1>{this.state.title}</h1>
            </div>
            </div>
            <div class="row ">
            <div class="col-md-8">
            <div class="row">
            <div class="col-md-6">
              <h2>Les Ingredients</h2>
              <ul>{this.state.ingredients.map((ingredient, index) => <p><li key={index}>{ingredient}</li></p>)}</ul>
            </div>
            <div class="col-md-6">
            <h2>Les Etapes</h2>
        <ul> <ul>{this.state.steps.map((step, index) => <li  key={index}><span id="key">{index+1}</span><span id="step">{step}</span></li>)}</ul></ul>
            </div>
            </div>
            </div>
            <div class="col-md-4">
              <img  src={this.state.image} class="single-recipe-img"/>
              </div>
            </div>
            <div class="row">
            <div class="col-md-12">
            <p><Link to ="/recipes">Retour</Link></p>
            </div>
            </div>
            </div>
            
            
        )
    }
}

export default SingleRecipe