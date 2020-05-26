import React , {Component} from 'react'
import './authentification.css'

class Authentification extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
         super(props)
    }

    render(){
        return(
            <div class="slide">
          <img src="https://digitalcenturysf.com/themes/chili/wordpress/wp-content/uploads/2016/06/slide1.jpg"
            alt="img-auth"
          class="img-auth" />
         <h1 id="title-auth">Profiter de la cuisine</h1>
         <button id="btn-auth" className="btn btn-success btn-xs"
          >Se connecter</button>
         </div>

        )
    }
}

export default Authentification