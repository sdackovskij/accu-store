import React from "react";
import "../../style/scss/Sidenav.scss";
import { NavLink } from "react-router-dom";

class Sidenav extends React.Component {

    render() {

return (
  <nav>
    
    <ul id="slide-out" className="sidenav sidenav-fixed">
      <li>
        <div className="user-view">
          <img className="logoImg" src="./img/logo1.jpg" />
        </div>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li>
        <a className="subheader" href="#!">
          Pokedex
        </a>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li>  
        <NavLink className="waves-effect sidenav-close" exact to='/' activeClassName="active">
        <i className="material-icons">apps</i>All pokemons
       </NavLink>
      </li>
      <li>
        <NavLink className="waves-effect sidenav-close" to='/my-pokedex' activeClassName="active" >
          <i className="material-icons">favorite</i>My pokemons
       </NavLink>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li>
        <a className="subheader" href="#!">
          Pokemons Game
        </a>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li>
        <a className="waves-effect" href="#!">
          <i className="material-icons">local_library</i>
          Quiz
        </a>
      </li>
      <li>
        <div className="divider"></div>
      </li>
    </ul>
    <a
      href="#"
      data-target="slide-out"
      className="sidenav-trigger show-on-large"
    >
      <i className="material-icons">menu</i>
    </a>

    <div className="nav-wrapper">
      <form className="search-area">
        <div className="input-field">
          <input id="search" type="search" required />
          <label className="label-icon" htmlFor="search"><i className="material-icons" >search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
   

<div className="product-cart">
        <a className='dropdown-trigger btn' href='#' data-target='dropdown1'><i className="material-icons shopping-cart">shopping_cart</i>Корзина</a>

    
    <ul id='dropdown1' className='dropdown-content'>
      <li><a href="#!">one</a></li>
      <li><a href="#!">two</a></li>
      <li className="divider" tabindex="-1"></li>
      <li><a href="#!">three</a></li>
      <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
      <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
    </ul>
</div>
    </div>
  </nav>
); }
}

export default Sidenav;