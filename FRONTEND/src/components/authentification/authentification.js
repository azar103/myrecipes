import React , {Component} from 'react'
import './authentification.scss'

class Authentification extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
         super(props)
    }

    render(){
        return(
            <div class="slide">
          <img src="https://foodhub.modeltheme.com/wp-content/uploads/2020/02/foodhub-slider-main-food-v4.jpg?id=20741"
            alt="img-auth"
          class="img-auth" />
         <div className="container-auth">
         <h1 id="title-auth">Profiter de la cuisine</h1>
         <input type="email" className="input"  placeholder="email"/>
         <input type="password" className="input password"  placeholder="password"/>
         <button id="btn-auth" className="btn btn-success btn-xs"
          >Se connecter</button>
         </div> 
         </div>

        )
    }
}

export default Authentification