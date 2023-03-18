import React from "react";
import group from "./../../assets/images/Group 1.png";
import "./Main.css";
import group2 from "./../../assets/images/Group 2.png";
import arrow from "./../../assets/images/arrow.png";
import img1 from "./../../assets/images/img1.png";
import img2 from "./../../assets/images/img2.png";
import img3 from "./../../assets/images/img3.png";
const Main = () => {
  return (
    <div className="wrappper">
      <div className="container">
        <div className="blog">
          <div className="titleCont">
            <div className="titleContainer">
              <div className="gradient1"></div>
              <div className="textTitle">
                Подберём резюме <br /> для ваших вакансий <br /> и обзвоним
                кандидатов
              </div>
            </div>

            <div className="actions">
              <div className="action1">
                Проведём
                <br /> <b>детальный анализ</b>
                <br /> вакансии
              </div>
              <div className="action2">
                Организуем <b>ручной подбор</b> <br /> с учётом ваших требований
                <br />и пожеланий
              </div>
              <div className="action3">
                Соберём актуальные <br /> резюме с <b>ведущих job-ресурсов</b>
              </div>
            </div>
          </div>
          <div className="squirrel1">
            <div className="gradient2"></div>
            <img src={group} alt="" />
          </div>
        </div>
        <div className="application">
          <div className="label">
            Оставьте заявку, и менеджер ответит в течение 30 минут
          </div>
          <div className="form">
            <input type="text" className="name" placeholder="Ваше имя" />
            <input type="text" className="phone" placeholder="Ваш телефон" />
            <input
              type="text"
              className="soldier"
              placeholder="Какого сотрудника вы ищите "
            />
            <button className="call">Заказать звонок</button>
          </div>
          <div className="conditions">
            Нажимая на кнопку, вы даете согласие на обработку персональных
            данных и соглашаетесь с политикой конфиденциальности
          </div>
        </div>
      </div>
      <div className="title"></div>
      <div className="container2">
        <div className="titleCont">
          Почему работать с JobHelp удобно и выгодно
        </div>
        <div className="blogs_container2">
          <div className="gradient4"></div>
          <div className="blogs_cont">
            <div className="section1">
              <div className="blog_cont2">
                <div className="titleBlog">Доступ к базам job-ресурсов</div>
                <div className="blogLabel">
                  Найдём лучших кандидатов среди 74 млн резюме из баз популярных{" "}
                </div>
                <div className="blogArrow">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="blog_cont2">
                <div className="titleBlog">Помощь персонального менеджера</div>
                <div className="blogLabel">
                  Найдём лучших кандидатов среди 74 млн резюме из баз популярных
                </div>
                <div className="blogArrow">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="blog_cont2">
                <div className="titleBlog">Весь поиск как на ладони</div>
                <div className="blogLabel">
                  Гарантируем высокое качество работ. Наблюдайте за всеми
                </div>
                <div className="blogArrow">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="section2">
              <div className="blog_cont2">
                <div className="titleBlog">Дешевле, чем кадровое агентство</div>
                <div className="blogLabel">
                  Наши услуги стоят в 3-4 раза дешевле, чем у кадровых агентств.
                </div>
                <div className="blogArrow">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="blog_cont2">
                <div className="titleBlog">Высокая скорость работы</div>
                <div className="blogLabel">
                  Присылаем первые резюме в течение двух рабочих дней после
                  начала работы. Резюме
                </div>
                <div className="blogArrow">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="blog_cont2">
                <div className="titleBlog">
                  Большой опыт в поиске кандидатов
                </div>
                <div className="blogLabel">
                  Гарантируем высокое качество работ. Наблюдайте за всеми
                </div>
                <div className="blogArrow">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="grad">
            <div className="squirrel2">
              <img src={group2} alt="" />
            </div>
          </div>

          <button className="btnCont2">Оставить заявку</button>
        </div>
      </div>
      <div className="container3">
        <div className="gradient3"></div>
        <div className="titleCont3">Мы любим писать про HR</div>
        <div className="sections">
          <div className="section_cont3">
            <img src={img1} alt="" />
            <div className="textSection">
              Внимание! Манипулятор на собеседовании
            </div>
            <div className="like">
              <div className="data">19 сентября</div>
              <div className="views">234 просмотров</div>
            </div>
          </div>
          <div className="section_cont3">
            <img src={img2} alt="" />
            <div className="textSection">
              Встречаем по одёжке – как оценить внешний вид кандидата в
              современных реалиях
            </div>
            <div className="like">
              <div className="data">13 сентября</div>
              <div className="views">211 просмотров</div>
            </div>
          </div>
          <div className="section_cont3">
            <img src={img3} alt="" />
            <div className="textSection">
              Кандидат, которому вы отказали, запросил обратную связь. Давать
              или не давать?
            </div>
            <div className="like">
              <div className="data">5 сентября</div>
              <div className="views">256 просмотров</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
