import React  from 'react';
import { Link,BrowserRouter as Router  } from 'react-router-dom';
import  './Header.scss';
function Header() {
   return(
    <div className="navbar navbar-default">
    <div className="container-fluid">
        <ul className="nav navbar-nav">
        <li>
               <Link to="/recipes" style={{color: '#FFFFFF' , fontWeight:'bold'}} activeClassName= 'is-active'>Acceuil</Link>
           </li>   
        <li>
               <Link to="/dashboard" style={{color: '#FFFFFF'}}  activeClassName= 'is-active'>Mon Dashboard</Link>
           </li>
           <li>
               <Link to="/signup" style={{color: '#FFFFFF'}}  activeClassName= 'is-active'>Mes Recettes</Link>
           </li>

           <li>
               <Link to="/favorites" style={{color: '#FFFFFF'}}  activeClassName= 'is-active'>Mes Favoris</Link>
           </li>
          
        </ul>
        <ul className="nav navbar-nav navbar-right">   
           <li>
               <Link to="/auth" style={{color: '#FFFFFF'}}  activeClassName= 'is-active'>Connexion</Link>
           </li>
           <li>
               <Link to="/signup" style={{color: '#FFFFFF'}}  activeClassName= 'is-active'>Inscription</Link>
           </li>
           
        </ul>
    </div>
  </div>
   )

}

export default Header;