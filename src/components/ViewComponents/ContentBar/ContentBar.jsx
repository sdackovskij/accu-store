import React from 'react';
import './ContentBar.scss';
import { NavLink } from 'react-router-dom';


const ContentBar = () => (
    <div className="contentBar-wrapper valign-wrapper">
        <ul className="contentBar-list">
            <li className="waves-effect waves-light">Все категории</li>
            <li className="waves-effect waves-light">Скидки и акции</li>
            <li className="waves-effect waves-light">Статьи</li>
            <li className="waves-effect waves-light">Ремонт</li>
            <li className="waves-effect waves-light">Скупка</li>
            <li className="waves-effect waves-light">Отзывы</li>
            <li className="waves-effect waves-light">О нас</li>
            <li className="waves-effect waves-light">Контакты</li>
        </ul>
   </div>
);

export default ContentBar;