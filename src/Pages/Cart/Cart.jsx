import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Cart.module.css";
import Footer from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { BsCartX } from "react-icons/bs";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  saveCartToLocalStorage,
} from "../../Store/addCart/CartActions";
import { MdDelete } from "react-icons/md";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log(cartItems);
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
    saveCartToLocalStorage(cartItems.filter((item) => item.id !== itemId));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
    saveCartToLocalStorage(cartItems);
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
    saveCartToLocalStorage(cartItems);
  };

  function formatPrice(price) {
    return `${price.toFixed(2)} $`; // Форматируем цену с двумя десятичными знаками и добавляем символ валюты
  }

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <div className="container">
          {cartItems && cartItems.length > 0 && (
            <div className="headText">
              <h1>Корзина</h1>
            </div>
          )}

          {cartItems.length === 0 ? (
            <div>
              <div className="headText">
                <h1>Корзина пуста</h1>
              </div>
              <div className={styles.empty}>
                <BsCartX size={200} color="#767676" />
              </div>
            </div>
          ) : (
            cartItems.map((item) => {
              return (
                <div className={styles.product}>
                  <div key={item.product.id} className={styles.productBlock}>
                    <div className={styles.imgBox}>
                      {/* <img
                            src={selectedProductChild.image}
                            alt={item.product.name}
                            width={200}
                            height={200}
                          />  */}
                      <div className={styles.textHeader}>
                        <h1>Картинка</h1>
                      </div>
                      <img
                        src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className={styles.box}>
                      <div className={styles.textHeader}>
                        <h1>Название</h1>
                      </div>
                      <h2>{item.product.name}</h2>
                    </div>
                    <div className={styles.box}>
                      <div className={styles.textHeader}>
                        <h1>Артикуль</h1>
                      </div>
                      <h2>{item.product.zip_code}</h2>
                    </div>
            
                    <div className={styles.box}>
                      <div className={styles.textHeader}>
                        <h1>Количество</h1>
                      </div>
                      <div className={styles.quantity}>
                        <div onClick={() => handleDecreaseQuantity(item.id)}>
                          -
                        </div>
                        <p> {item.quantity}</p>
                        <div onClick={() => handleIncreaseQuantity(item.id)}>
                          +
                        </div>
                      </div>
                    </div>
                    <div className={styles.box}>
                      <div className={styles.textHeader}>
                        <h1>Цена</h1>
                      </div>
                      <h2>
                        {" "}
                        {formatPrice(item.product.price * item.quantity)}
                      </h2>
                    </div>
                    <div className={styles.box}>
                      <div className={styles.textHeader}>
                        <h1>Удалить</h1>
                      </div>
                      <div>
                        <MdDelete
                          onClick={() => handleRemoveFromCart(item.id)}
                          size={30}
                          color={"#ca0000"}
                          cursor="pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {cartItems && cartItems.length > 0 && (
            <div className={styles.checkoutBtn}>
              <div className={styles.order}>
                <h1>Итоги заказа</h1>
              </div>
              <div className={styles.quantityLength}>
                <h1>
                  Количество товаров: <span>{cartItems.length}</span>
                </h1>
              </div>
              <div>
                <div className={styles.sum}>
                  <h2>К оплате: </h2>
                  <span>112$</span>
                </div>
                <button>Оформить заказ</button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <div style={{background: '#f3f3f3'}}>
      <div className="container">

      <div className={styles.cartContent}>
        <div className={styles.cartBlock2}>
          <div className={styles.cartBox}>
            <div className={styles.cartHead}>
              <h1>Картинка</h1>
            </div>
            <div>
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUe4OCQ9tXHvz6fUWBmr-3elBsf4-5Jhya7g&usqp=CAU"
                }
                alt={"fefe"}
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className={styles.cartBox}>
            <div className={styles.cartHead}>
              <h1>Название</h1>
            </div>
            <div>
              <p>Джинсы</p>
            </div>
          </div>
          <div className={styles.cartBox}>
            <div className={styles.cartHead}>
              <h1>Описание</h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur explicabo ut excepturi?
              </p>
            </div>
          </div>
          <div className={styles.cartBox}>
            <div className={styles.cartHead}>
              <h1>Цвет</h1>
            </div>
            <div>
              <p>Синий</p>
            </div>
          </div>
          <div className={styles.cartBox}>
            <div className={styles.cartHead}>
              <h1>Размер</h1>
            </div>
            <div>
              <p>М</p>
            </div>
          </div>
          <div className={styles.cartBox}>
            <div className={styles.cartHead}>
              <h1>Количество</h1>
            </div>
            <div>
              <p>М</p>
            </div>
          </div>
          <div className={styles.cartBox}>
            <div className={styles.cartHead}>
              <h1>Удалить</h1>
            </div>
            <div>
              <p>Удалить</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      </div> */}
      <Footer />
    </div>
  );
};

export default Cart;
