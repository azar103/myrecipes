import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import  './UserForm.scss'
import Header from '../Header/Header'
class UserForm extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password:'',
            redirectTo: false
        }
    }
   
    _handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }


    _handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    _signUp = (e) => {
        e.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:3001/api/auth/signup', user)
             .then(() => {
                 this.setState({
                     redirectTo:true
                 })
             })
    } 

 
    // eslint-disable-next-line react/require-render-return
    render() {
       if(this.state.redirectTo){
          return(
              <Redirect to="/auth" />
          )
       } 
       else {
        return(
           <div>
            <Header />    
            <form className="col-sm-8 col-sm-offset-2" onSubmit={this._signUp}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input    type="text" 
                        id="title"  
                        className="form-control" 
                        placeholder="Entrez l'email"
                        value= {this.state.email}
                        onChange={this._handleChangeEmail}
                        />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input    type="password" 
                        id="password"  
                        className="form-control" 
                        placeholder="Entrez le mot de passe"
                        value= {this.state.password}
                        onChange={this._handleChangePassword}
                        />
            </div>
          <button className="btn btn-success" type="submit" value="Soumettre" >Inscription</button>

          </form> 
          </div> 
           )
       }
      
    }
}


export default UserForm
