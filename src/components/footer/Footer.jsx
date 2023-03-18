import React from "react";
import logo from "./../../assets/images/logo.png";
import up from "./../../assets/images/up.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="foot">
      <div className="gradientFoot"></div>
      <div className="foot_container">
        <div className="sectionFoot">
          <div className="logoFoot">
            <img src={logo} alt="" />
            <span className="textLogo">Help</span>
          </div>
          <div className="sectionLabel">ООО «Джобхелп»</div>
          <div className="sectionLabel">ОГРН 1187847372327</div>
          <div className="sectionLabel">ИНН 7810745237</div>
        </div>

        <div className="sectionFoot">
          <div className="titleFoot">Меню</div>
          <div className="sectionLabel">О нас</div>
          <div className="sectionLabel">Услуги</div>
          <div className="sectionLabel">Стоимость</div>
          <div className="sectionLabel">Контакты</div>
          <div className="sectionLabel">Блог</div>
        </div>

        <div className="sectionFoot">
          <div className="titleFoot">Услуги</div>
          <div className="sectionLabel">Поиск анкет</div>
          <div className="sectionLabel">Поиск + обзвон</div>
          <div className="sectionLabel">Проверка кандидата</div>
          <div className="sectionLabel">Размещение вакансии</div>
          <div className="sectionLabel">Рассылка</div>
        </div>

        <div className="sectionFoot">
          <div className="titleFoot">Контакты</div>
          <div className="sectionLabelTel">
            <div className="labTeltext">телефон</div>
            <div className="labTel">8 800 700-87-62</div>
          </div>
          <div className="sectionLabel">
            <div className="labTeltext">адрес</div>
            <div className="adress">
              191025, г. Санкт-Петербург, Невский проспект, д. 104 (БЦ Tempo),
              офис 222
            </div>
          </div>
          <div className="sectionLabelTel">
            <div className="labTeltext">работаем по будням</div>
            <div className="labTel">с 9:00 до 18:00</div>
          </div>
        </div>

        <div className="footEnd">
          <div className="arrowTop">
            <img src={up} alt="" />
          </div>
          <button className="footBtn">Оставить заявку</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
