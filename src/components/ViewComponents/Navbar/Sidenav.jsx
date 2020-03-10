import React from 'react';
import './Sidenav.scss';
import { NavLink } from 'react-router-dom';


const Sidenav = () => (
  <nav>
  
    

    <div className="nav-wrapper">
      <div className="logoBox"><a href="#" className="brand-logo left">Logo</a></div>
      <form className="search-area">
        <div class="input-field">
          <input id="search" type="search" placeholder="Найти..." required />
          <label class="label-icon" for="search">
            <i class="material-icons">search</i>
          </label>
          <i class="material-icons">close</i>
        </div>
      </form>

      <ul class="right hide-on-med-and-down">
        <li><a href="#"><i class="material-icons">apps</i></a></li>
        <li><a href="#"><i class="material-icons">explore</i></a></li>
        <li><a href="#"><i class="material-icons">call</i></a></li>
      </ul>

      <div className="product-cart">
        <a className="dropdown-trigger btn" href="#!" data-target="dropdown1">
          <i className="material-icons shopping-cart">shopping_cart</i>
          Корзина
        </a>

        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a href="#!">
              <i className="material-icons product-cart-icons">attach_money</i>
              Оформить
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons product-cart-icons">
                delete_forever
              </i>
              <span className="product-cart-text">Очистить</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Sidenav;
