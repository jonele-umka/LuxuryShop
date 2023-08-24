import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Store/Products/ProductAction";
import { Link } from "react-router-dom";

// image
import errorImg from "../../assets/image/error.png";
import fashion from "../../assets/image/mainBackground/fashion.png";
// mui
import CircularProgress from "@mui/material/CircularProgress";
// image
import armani from "../../assets/image/partners/armani.png";
import gucci from "../../assets/image/partners/gucci.png";
import versace from "../../assets/image/partners/versace.png";
import prada from "../../assets/image/partners/prada.png";
import dolce from "../../assets/image/partners/dolce.png";
import dior from "../../assets/image/partners/dior.png";
import chanel from "../../assets/image/partners/chanel.png";
// components
import { NewProducts } from "../../Components/NewProducts/NewProducts";
import { Header } from "../../Components/Header/Header";
import SwipperHome from "../../Components/Sliders/SwipperHome/SwipperHome";
import { Categories } from "../../Components/Categories/Categories";
import Footer from "../../Components/Footer/Footer";
import ProductItem from "../../Components/ProductItem/ProductItem";
import { SwipperMain } from "../../Components/Sliders/SwiperMain/SwiperMain";

export const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const availableProducts = products.filter((product) => product.is_available);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // loading and error
  if (loading) {
    return (
      <div className="loading">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img src={errorImg} width={200} alt="no products" />
          <p style={{ fontSize: 20, marginTop: 10 }}>Ошибка с сервером!</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className={styles.home}>
        <Header />
        <SwipperHome />
        <div className={styles.products}>
          <div className="container">
            {products && products.length > 0 && (
              <div className="headerText">
                <h1>НАШИ ПРОДУКТЫ</h1>
              </div>
            )}

            <div className={styles.productsBlock}>
              {availableProducts.map((item) => (
                <ProductItem key={item.id} item={item} />
              ))}
            </div>
            {products && products.length > 0 && (
              <div className={styles.bottomText}>
                <Link to={"/products"}>ПОСМОТРЕТЬ ВСЕ ТОВАРЫ</Link>
              </div>
            )}
          </div>
        </div>
        <div className={styles.main}>
          <div className="container">
            <div className={styles.mainBlock}>
              <img src={fashion} alt="fashion" />

              <SwipperMain />
            </div>
          </div>
        </div>

        <Categories />
        <NewProducts />
        <div className={styles.partners}>
          <div className="container">
            <div className={styles.partnerBlock}>
              <div className={styles.partnerBox}>
                <img src={armani} alt="armani" />
              </div>
              <div className={styles.partnerBox}>
                <img src={gucci} alt="gucci" />
              </div>
              <div className={styles.partnerBox}>
                <img src={versace} alt="versace" />
              </div>
              <div className={styles.partnerBox}>
                <img src={prada} alt="prada" />
              </div>
              <div className={styles.partnerBox}>
                <img src={dolce} alt="dolce" />
              </div>
              <div className={styles.partnerBox}>
                <img src={dior} alt="dior" />
              </div>
              <div className={styles.partnerBox}>
                <img src={chanel} alt="chanel" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
