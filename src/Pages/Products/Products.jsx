import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { Link, useLocation } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Store/Products/ProductAction";
import { fetchFilteredProducts } from "../../Store/Filter/FilterAction";

import {
  selectColor,
  selectImage,
  selectSize,
  selectProductChildrenId,
} from "../../Store/Products/ProductAction";
import { removeFromFavorites } from "../../Store/isFavorite/favoriteAction";
// icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFillKanbanFill } from "react-icons/bs";
// mui
import CircularProgress from "@mui/material/CircularProgress";

// components
import { Header } from "../../Components/Header/Header";
import ProductItem from "../../Components/ProductItem/ProductItem";
import Footer from "../../Components/Footer/Footer";
import FilterProduct from "./FIlteredProducts";
import FilterDrawer from "../../Components/FilterDrawer/FilterDrawer";
import CatalogDrawer from "../../Components/CatalogDrawer/CatalogDrawer";
// image
import noProducts from "../../assets/image/No_Product_Found.png";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Фильтрация продуктов
  // const filters = useSelector((state) => state.filter);
  // const { size, color, brand, price } = filters;

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  // useEffect(() => {
  //   // Фильтрация продуктов при изменении фильтров
  //   const updatedProducts = products.filter((product) => {
  //     // Фильтрация по размеру
  //     let sizeArray = size;
  //     if (!Array.isArray(sizeArray)) {
  //       sizeArray = [sizeArray]; // Преобразование в массив, если не является массивом
  //     }
  //     if (sizeArray.length > 0 && !sizeArray.includes(product.selectedSize)) {
  //       return false;
  //     }

  //     // Фильтрация по цвету
  //     let colorArray = color;
  //     if (!Array.isArray(colorArray)) {
  //       colorArray = [colorArray]; // Преобразование в массив, если не является массивом
  //     }
  //     if (colorArray.length > 0) {
  //       const availableColors = product.product_children.map(
  //         (child) => child.color
  //       );
  //       const hasMatchingColor = colorArray.some((selectedColor) =>
  //         availableColors.includes(selectedColor)
  //       );
  //       if (!hasMatchingColor) {
  //         return false;
  //       }
  //     }

  //     if (brand.length > 0 && !brand.includes(product.brand)) {
  //       return false;
  //     }

  //     // Фильтрация по цене
  //     const productPrice = product.price;
  //     if (productPrice < price.min || productPrice > price.max) {
  //       return false;
  //     }

  //     return true;
  //   });

  //   setFilteredProducts(updatedProducts);
  // }, [products, size, color, brand, price]);

  const location = useLocation();

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
        <img src={noProducts} width={200} alt="no products" />
      </div>
    );
  }
  return (
    <div className={styles.products}>
      <Header />
      <div className="headText">
        <h1>Все товары</h1>
      </div>
      <div className={styles.productsContent}>
        <div className="container">
          <div className={styles.filteres}>
            <div>
              <CatalogDrawer />
              <p>Коллекция товаров</p>
            </div>
            <div>
              <FilterDrawer />
              <p>Фильтрация</p>
            </div>
          </div>
          <div className={styles.cardBlock}>
            {products.map((product) => (
              <ProductItem item={product} />
            ))}
            {/* {filteredProducts && filteredProducts.length > 0 && filteredProducts.results.length > 0
              ? filteredProducts.results.map((item) => (
                  <ProductItem item={item}   />
                ))
              : products.map((product) => <ProductItem item={product} />)} */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
