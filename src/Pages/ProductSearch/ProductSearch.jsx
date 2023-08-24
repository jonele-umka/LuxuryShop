import React from "react";
import { useSelector } from "react-redux";
import styles from "./ProductSearch.module.css";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import ProductItem from "../../Components/ProductItem/ProductItem";
import { Header } from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
// mui
import CircularProgress from "@mui/material/CircularProgress";

// image
import errorImg from "../../assets/image/error.png";
const ProductSearch = () => {
  const searchResults = JSON.parse(localStorage.getItem("searchResults"));
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const location = useLocation();
  const searchValue = location.state?.search;
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

  // const [selectedProducts, setSelectedProducts] = useState([]);
  // const [selectedColors, setSelectedColors] = useState({});
  // const [selectedSize, setSelectedSize] = useState({});
  // const [selectedQuantities, setSelectedQuantities] = useState({});
  // // по умолчанию первый товар
  // useEffect(() => {
  //   searchResults.forEach((product) => {
  //     setSelectedColors((prevSelectedColors) => ({
  //       ...prevSelectedColors,
  //       [product.id]: product.colors[0],
  //     }));
  //     setSelectedSize((prevSelectedSizes) => ({
  //       ...prevSelectedSizes,
  //       [product.id]: product.size[0],
  //     }));
  //   });
  // }, []);
  // // добавить размер
  // const handleSizeSelect = (productId, size) => {
  //   setSelectedSize((prevSelectedSize) => ({
  //     ...prevSelectedSize,
  //     [productId]: size,
  //   }));
  // };
  // // добавить цвет
  // const handleColorClick = (productId, color) => {
  //   setSelectedColors((prevSelectedColors) => ({
  //     ...prevSelectedColors,
  //     [productId]: color,
  //   }));
  // };
  // // удалить товар из корзины
  // const handleRemoveFromCart = (productId) => {
  //   setSelectedProducts((prevSelectedProducts) =>
  //     prevSelectedProducts.filter((product) => product.id !== productId)
  //   );
  // };
  // // запрет добавления товара который уже добавлен
  // const isProductSelected = (productId) => {
  //   return selectedProducts.some((product) => product.id === productId);
  // };
  // // добавить в корзину
  // const handleAddToCart = (product) => {
  //   // проверка добавлен ли товар в корзину
  //   if (isProductSelected(product.id)) {
  //     return;
  //   }
  //   // по умолчанию количесвто товара 1 или выбранный пользователем
  //   const selectedQuantity = selectedQuantities[product.id] || 1;
  //   // изменение цены в зависимости от количества
  //   const totalPrice = product.price * selectedQuantity;

  //   setSelectedProducts((prevSelectedProducts) => [
  //     ...prevSelectedProducts,
  //     {
  //       ...product,
  //       color: selectedColors[product.id],
  //       quantity: selectedQuantity,
  //       totalPrice: totalPrice,
  //       size: selectedSize[product.id],
  //     },
  //   ]);
  // };
  console.log(searchResults);
  return (
    <div>
      <Header />

      {!searchResults ||
      searchResults.length <= 0 ||
      searchResults.results.length <= 0 ? (
        <div className={styles.empty}>
          <div className="headText">
            <h1>Товар с таким названием не найдено!</h1>
          </div>
        </div>
      ) : (
        <div className={styles.search}>
          <div className="headText">
            <h1>
              Поиск по запросу: <span>"{searchValue}"</span>
            </h1>
          </div>
          <div className={styles.searchResults}>
            <div className="container">
              <div className={styles.searchBlock}>
                {searchResults.results.map((product) => (
                  <ProductItem item={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductSearch;
