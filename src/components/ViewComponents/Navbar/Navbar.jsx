import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Sidenav = () => (
  <header className="nav-wrapper">
    <div className="content-box">
      <div className="logo">AccuStore</div>
      <div>
        <a className="waves-effect waves-light btn-small catalog">
          <i className="material-icons left catalog-icon">menu</i>Каталог
        </a>
      </div>
      <div className="search-box">
        <form className="search-form">
          <button type="button">Везде</button>
          <input />
          <button type="submit"><i className="material-icons left">search</i></button>
        </form>
      </div>
      <div>
      <ul className="nav-icons-list">
        <li><i class="material-icons">search</i></li>
        <li><i class="material-icons">view_module</i></li>
          <li><i class="material-icons">favorite_border</i></li>
        <li><i class="material-icons">more_vert</i></li>
      </ul>
      </div>
    </div>
  </header>
);

export default Sidenav;
