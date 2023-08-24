import React from "react";
import styles from "./Footer.module.css";
// image
import whatsapp from "../../assets/image/Footer/whatsapp-svgrepo-com.svg";
import instagram from "../../assets/image/Footer/instagram-svgrepo-com.svg";
import telegram from "../../assets/image/Footer/telegram-svgrepo-com.svg";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerBlock}>
          <div className={styles.footerBox}>
            <h1>Контакты</h1>
            <ul>
              <li>
                <a href="tel: +996708342008">+996708342008</a>
              </li>
              <li>
                <a href="mailto: qwert@mail.ru">info@microret.com</a>
              </li>
              <li>
                <p>
                  Пн - Пт: 9:00 до 18:00 <br />
                  Сб - Вс: ЗАКРЫТО
                </p>
              </li>
              <li>
                <a href="https://www.google.kg/maps/place/Microret+Software+Company/@42.821819,74.6132639,18.43z/data=!4m5!3m4!1s0x389eb564a7886177:0x33a1d65b045d655c!8m2!3d42.8218914!4d74.6134322?hl=ru">
                  Кыргызстан г. Бишкек <br /> ул.Ахунбаев 165
                </a>
              </li>
            </ul>
            <div className={styles.socialBlock}>
              <ul>
                <li>
                  <a href="https://wa.me/+996708342008">
                    <img src={whatsapp} alt="whatsapp" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/microret_kg/">
                    <img src={instagram} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://web.telegram.org/k/#@kamaski">
                    <img src={telegram} alt="telegram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBox}>
            <h1>КАТАЛОГ</h1>
            <ul>
              <li>
                <a href="#">Бренды</a>
              </li>
              <li>
                <a href="#">Новинки</a>
              </li>
              <li>
                <a href="#">Головные уборы</a>
              </li>
              <li>
                <a href="#">Одежда</a>
              </li>
              <li>
                <a href="#">Аксессуары</a>
              </li>

              <li>
                <a href="#">Обуви</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerBox}>
            <h1>Информация</h1>
            <ul>
              <li>
                <a href="#">О Нас</a>
              </li>
              <li>
                <a href="#">Доставка</a>
              </li>

              <li>
                <a href="#">Условия гарантии</a>
              </li>

              <li>
                <a href="#">Политика конфиденциальности</a>
              </li>

              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerBox}>
            <h1>Личный кабинет</h1>
            <ul>
              <li>
                <a href="#">Личный Кабинет</a>
              </li>
              <li>
                <a href="#">История заказов</a>
              </li>
              <li>
                <a href="#">Корзина</a>
              </li>
              <li>
                <a href="#">Избранное</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.footerBottom}>
          <h1>© {new Date().getFullYear()} Все права защищены</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
