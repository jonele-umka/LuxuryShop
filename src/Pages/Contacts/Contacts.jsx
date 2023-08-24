// react
import React from "react";
import styles from "./Contacts.module.css";
import { Link } from "react-router-dom";
// Components

// image
import whatsapp from "../../assets/image/Footer/whatsapp-svgrepo-com.svg";
import instagram from "../../assets/image/Footer/instagram-svgrepo-com.svg";
import telegram from "../../assets/image/Footer/telegram-svgrepo-com.svg";
import Footer from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";

function Contacts() {
  return (
    <div className={styles.contacts}>
      <Header />
      <div className={styles.contactsContent}>
        <div className="container">
          <div className={styles.contactsBlock}>
            <div className={styles.contactsBox}>
              <h1>Телефон</h1>
              <ul>
                <li>
                  <a href="tel: +996708342008">+996708342008</a>
                </li>
              </ul>
            </div>
            <div className={styles.contactsBox}>
              <h1>Эл.почта</h1>
              <ul>
                <li>
                  <a href="mailto: qwert@mail.ru">info@microret.com</a>
                </li>
              </ul>
            </div>
            <div className={styles.contactsBox}>
              <h1>График работы</h1>
              <ul>
                <li>
                  <p>
                    Пн - Пт: 9:00 до 18:00 <br />
                    Сб - Вс: ЗАКРЫТО
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.contactsBox}>
              <h1>Адрес</h1>
              <ul>
                <li>
                  <a href="https://www.google.kg/maps/place/Microret+Software+Company/@42.821819,74.6132639,18.43z/data=!4m5!3m4!1s0x389eb564a7886177:0x33a1d65b045d655c!8m2!3d42.8218914!4d74.6134322?hl=ru">
                    Кыргызстан г. Бишкек <br /> ул.Ахунбаев 165
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.contactsBox}>
              <h1>Мессенджеры</h1>
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
          </div>

          <div className={styles.contactsBox}>
            <iframe
              title={new Date().getDate() + ""}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d311.72205505427917!2d74.61331523063387!3d42.82168202915853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb564a7886177%3A0x33a1d65b045d655c!2sMicroret%20Software%20Company!5e0!3m2!1sru!2skg!4v1670931421396!5m2!1sru!2skg"
              width={"100%"}
              height={500}
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contacts;
