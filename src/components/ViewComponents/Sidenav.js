import React from "react";
import "../../style/scss/Sidenav.scss";
import logo from '../../../public/img/logo1.jpg';
import { NavLink } from "react-router-dom";

class Sidenav extends React.Component {

    render() {

return (
  <nav>
    
    <ul id="slide-out" className="sidenav sidenav-fixed">
      <li>
        <div className="user-view">
          <img className="logoImg" src={logo}/>
        </div>
      </li>     
      <li>
        <div className="divider"></div>
      </li>
      <li className="no-padding">
        <ul className="collapsible collapsible-accordion">
          <li className="bold waves-effect">
            <a className="collapsible-header" tabIndex="0">Каталог<i className="material-icons chevron">chevron_right</i></a>
            <div className="collapsible-body" >
              <ul>
                <li><NavLink className="waves-effect sidenav-close" exact to='/' activeClassName="active">
                  <i className="material-icons">exposure</i>Аккумуляторы
       </NavLink></li>
                <li> <NavLink className="waves-effect sidenav-close" to='/my-pokedex' activeClassName="active" >
                  <i className="material-icons">battery_charging_full</i>Зарядные устройства
       </NavLink></li>
                
              </ul>
            </div>
          </li>
        </ul>

      </li>
      <li className="no-padding">
        <ul className="collapsible collapsible-accordion">
          <li className="bold waves-effect">
            <a className="collapsible-header" tabIndex="0">О нас<i className="material-icons chevron">chevron_right</i></a>
            <div className="collapsible-body" >
              <ul>
                <li><a href="/pages/admin-dashboard" className="waves-effect active">Наши магазины<i className="material-icons">web</i></a></li>
                <li><a href="/pages/admin-fixed-chart" className="waves-effect">Доставка<i className="material-icons">list</i></a></li>
                <li><a href="/pages/admin-grid" className="waves-effect">Отзывы<i className="material-icons">dashboard</i></a></li>
                <li><a href="/pages/admin-chat" className="waves-effect">Полезное<i className="material-icons">chat</i></a></li>
              </ul>
            </div>
          </li>
        </ul>

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
          <li><a href="#!"><i className="material-icons product-cart-icons">attach_money</i>Оформить</a></li>
          <li><a href="#!"><i className="material-icons product-cart-icons">delete_forever</i><span className="product-cart-text">Очистить</span></a></li>
    </ul>
</div>
    </div>
  </nav>
); }
}

export default Sidenav;
