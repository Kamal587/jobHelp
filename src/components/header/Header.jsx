import React from "react";
import logo from "./../../assets/images/logo.png";
import pers from "./../../assets/images/persButton.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="wrap">
        <div className="menu">
          <div className="logo">
            <img src={logo} alt="" />
            <span className="textLogo">Help</span>
          </div>
          <a href="" className="atrib">
            О нас
          </a>
          <a href="" className="atrib">
            Услуги
          </a>
          <a href="" className="atrib">
            Стоимость
          </a>
          <a href="" className="atrib">
            Контакты
          </a>
          <a href="" className="atrib">
            Статьи
          </a>
        </div>
        <div className="tel">
          <div className="telefon">
            <div className="textTel">телефон</div>
            <div className="fon">8 800 700-87-62</div>
          </div>
          <button className="person">
            <img src={pers} alt="" />
            Личный кабинет
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
