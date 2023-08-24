import React from "react";
import styles from "./Checkout.module.css";
// components
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
export const Checkout = () => {
  return (
    <div className={styles.checkout}>
      <Header />
      <div className={styles.checkoutContent}>
        <div className="container">
          <div className={styles.checkoutBlock}>
            <div className={styles.formCheckout}>
              <div className={styles.checkoutBox}>
                <div className={styles.headFormText}>
                  <h1>Адрес доставки</h1>
                </div>
                <form action="">
                  <div className={styles.addressFormBlock}>
                    <div className={styles.addressForm}>
                      <div>
                        <label htmlFor="name">ФИО</label>
                        <input type="text" placeholder="ФИО" />
                      </div>
                      <div>
                        <label htmlFor="number">Номер Телефона</label>
                        <input type="text" />
                      </div>
                      <div>
                        <label htmlFor="region">Регион</label>
                        <input type="text" placeholder="Чуй" />
                      </div>
                      <div>
                        <label htmlFor="city">Город</label>
                        <input type="text" placeholder="Бишкек" />
                      </div>
                    </div>
                    <div className={styles.homeAddress}>
                      <div>
                        <label htmlFor="address">Улица, дом и квартира</label>
                        <input type="text" placeholder="Айтматов 82 кв.42" />
                      </div>
                      <div>
                        <label htmlFor="index">Индекс почты</label>
                        <input type="text" placeholder="712333" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className={styles.cardBox}>
                <div className={styles.headFormText}>
                  <h1>Способ оплаты</h1>
                </div>
                <div className={styles.cardForm}>
                  <form action="">
                    <div className={styles.cardFormBlock}>
                      <div className={styles.cardFormBox}>
                        <div className={styles.inputBox + " " + styles.numCard}>
                          <label htmlFor="">Номер карты</label>
                          <input
                            type="text"
                            placeholder="0000 0000 0000 0000"
                          />
                        </div>
                        <div className={styles.inputBox}>
                          <label htmlFor="">Срок действия</label>
                          <div className={styles.monthYear}>
                            <div>
                              <input type="text" placeholder="ММ" />
                            </div>
                            <p>/</p>
                            <div>
                              <input type="text" placeholder="YY" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={styles.cardFormBox}>
                        <div className={styles.inputBox}>
                          <label htmlFor="">Держатель карты</label>
                          <input type="text" placeholder="Фамилия и имя" />
                        </div>
                        <div className={styles.cvv + " " + styles.inputBox}>
                          <label htmlFor="">CVV</label>
                          <input type="text" placeholder="000" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div className={styles.checkoutBtn}>
                <div className={styles.sum}>
                  <h1>К оплате: </h1>
                  <span>112$</span>
                </div>
                <div>
                  <button>Оформить заказ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
