import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isItemInFavorites } from "../../Store/isFavorite/favoriteAction";
import styles from "./Favorites.module.css";
import Footer from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { BsCartX } from "react-icons/bs";
import ProductItem from "../../Components/ProductItem/ProductItem";

export const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const error = useSelector((state) => state.favorites.error);
  console.log(favorites);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <div className="container">
          {favorites && favorites.length > 0 && (
            <div className="headText">
              <h1>Избранное</h1>
            </div>
          )}
          <div className={favorites.length === 0 ? "" : styles.favoritesBlock}>
            <div className={styles.productsBox}>
              {favorites.length === 0 ? (
                <div>
                  <div className="headText">
                    <h1>Избранные пусты</h1>
                  </div>
                  <div className={styles.empty}>
                    <BsCartX size={200} color="#767676" />
                  </div>
                </div>
              ) : (
                <div className={styles.favoritesBlock}>
                  {favorites.map((item) => (
                    <ProductItem
                      key={item.product_detail.id}
                      item={item.product_detail}
                      isInFavorites={isItemInFavorites(
                        favorites,
                        item.product_detail.id
                      )}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
