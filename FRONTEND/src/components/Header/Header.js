import React  from 'react';
import { Link,BrowserRouter as Router  } from 'react-router-dom';
import  './Header.css';
function Header() {
   return(
    <div className="navbar navbar-default">
    <div className="container-fluid">
        <ul className="nav navbar-nav">
          
           <li>
               <Link to="/recipes" activeClassName= 'is-active'>Recettes</Link>
           </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">   
           <li>
               <Link to="/auth" activeClassName= 'is-active'>Connexion</Link>
           </li>
           <li>
               <Link to="/signup" activeClassName= 'is-active'>Inscription</Link>
           </li>
        </ul>
    </div>
  </div>
   )

}

export default Header;