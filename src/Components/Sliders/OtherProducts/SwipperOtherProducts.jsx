import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

// swipper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./SwipperOtherProducts.css";
import { Pagination } from "swiper";
export const SwipperOtherProducts = () => {
  const products = [
    {
      id: 1,
      name: "Shirt",
      price: 25.99,
      size: ["M", "S", "SX", "XS", "XXS", "XXXS"],
      colors: ["red", "blue", "green"],
      images: {
        red: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        blue: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        green:
          "https://images.unsplash.com/photo-1604072374690-0e7d7bddd54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      id: 2,
      name: "Jeans",
      price: 49.99,
      size: ["M", "S", "SX"],
      colors: ["black", "blue", "gray"],
      images: {
        black: "https://i.imgur.com/PJ1d7Mf.jpg",
        blue: "https://i.imgur.com/2bgB8tA.jpg",
        gray: "https://i.imgur.com/LJdjLhM.jpg",
      },
    },
    {
      id: 3,
      name: "Sneakers",
      price: 79.99,
      size: ["M", "S", "SX"],
      colors: ["white", "black", "red"],
      images: {
        white: "https://i.imgur.com/HwQ2fNJ.jpg",
        black: "https://i.imgur.com/vtwf8Tj.jpg",
        red: "https://i.imgur.com/y2I4vAz.jpg",
      },
    },
    {
      id: 4,
      name: "Cap",
      price: 14.99,
      size: ["M", "S", "SX"],
      colors: ["black", "white", "blue"],
      images: {
        black: "https://i.imgur.com/NkYvuyF.jpg",
        white: "https://i.imgur.com/lNvqrPv.jpg",
        blue: "https://i.imgur.com/JiKxbXp.jpg",
      },
    },
    {
      id: 5,
      name: "Dress",
      price: 34.99,
      size: ["M", "S", "SX"],
      colors: ["yellow", "green", "red"],
      images: {
        yellow: "https://i.imgur.com/4oOKm2Z.jpg",
        green: "https://i.imgur.com/i8FLvKG.jpg",
        red: "https://i.imgur.com/VzofvN9.jpg",
      },
    },
    {
      id: 6,
      name: "Shirt",
      price: 25.99,
      size: ["M", "S", "SX", "XS", "XXS", "XXXS"],
      colors: ["red", "blue", "green"],
      images: {
        red: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        blue: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        green:
          "https://images.unsplash.com/photo-1604072374690-0e7d7bddd54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      id: 7,
      name: "Shirt",
      price: 25.99,
      size: ["M", "S", "SX", "XS", "XXS", "XXXS"],
      colors: ["red", "blue", "green"],
      images: {
        red: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        blue: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        green:
          "https://images.unsplash.com/photo-1604072374690-0e7d7bddd54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      id: 8,
      name: "Shirt",
      price: 25.99,
      size: ["M", "S", "SX", "XS", "XXS", "XXXS"],
      colors: ["red", "blue", "green"],
      images: {
        red: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        blue: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        green:
          "https://images.unsplash.com/photo-1604072374690-0e7d7bddd54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      },
    },
  ];
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedColors, setSelectedColors] = useState({});
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedQuantities, setSelectedQuantities] = useState({});
  // по умолчанию первый товар
  useEffect(() => {
    products.forEach((product) => {
      setSelectedColors((prevSelectedColors) => ({
        ...prevSelectedColors,
        [product.id]: product.colors[0],
      }));
      setSelectedSize((prevSelectedSizes) => ({
        ...prevSelectedSizes,
        [product.id]: product.size[0],
      }));
    });
  }, []);
  // добавить размер
  const handleSizeSelect = (productId, size) => {
    setSelectedSize((prevSelectedSize) => ({
      ...prevSelectedSize,
      [productId]: size,
    }));
  };
  // добавить цвет
  const handleColorClick = (productId, color) => {
    setSelectedColors((prevSelectedColors) => ({
      ...prevSelectedColors,
      [productId]: color,
    }));
  };
  // удалить товар из корзины
  const handleRemoveFromCart = (productId) => {
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.filter((product) => product.id !== productId)
    );
  };
  // запрет добавления товара который уже добавлен
  const isProductSelected = (productId) => {
    return selectedProducts.some((product) => product.id === productId);
  };
  // добавить в корзину
  const handleAddToCart = (product) => {
    // проверка добавлен ли товар в корзину
    if (isProductSelected(product.id)) {
      return;
    }
    // по умолчанию количесвто товара 1 или выбранный пользователем
    const selectedQuantity = selectedQuantities[product.id] || 1;
    // изменение цены в зависимости от количества
    const totalPrice = product.price * selectedQuantity;

    setSelectedProducts((prevSelectedProducts) => [
      ...prevSelectedProducts,
      {
        ...product,
        color: selectedColors[product.id],
        quantity: selectedQuantity,
        totalPrice: totalPrice,
        size: selectedSize[product.id],
      },
    ]);
  };
  return (
    <div>
      <div className="container">
        <div className="headText">
          <h1>Другие товары</h1>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="otherSwipper"
        >
          <div className="newBlock">
            {products.map((product) => (
              <SwiperSlide>
                <div key={product.id} className="product-card">
                  <img
                    className="product-card-img"
                    src={
                      selectedColors[product.id]
                        ? product.images[selectedColors[product.id]]
                        : product.images[product.colors[0]]
                    }
                    alt={product.name}
                  />
                  <div className="product-card-details">
                    <div className="product-card-names">
                      <Link
                        to={{
                          pathname: `/clothes/${product.id}`,
                          // state: {
                          //   name,
                          //   image,
                          //   description,
                          // },
                        }}
                        className="product-link"
                      >
                        <span className="product-name">{product.name}</span>
                      </Link>
                      <span className="product-price">{product.price} $</span>
                    </div>
                    <div className="product-size-colors">
                      <div className="clothesColors">
                        {product.colors.map((color) => (
                          <div
                            className={`color ${
                              selectedColors[product.id] === color
                                ? "selected"
                                : ""
                            }`}
                          >
                            <button
                              key={color}
                              style={{ backgroundColor: color }}
                              onClick={() =>
                                handleColorClick(product.id, color)
                              }
                            ></button>
                          </div>
                        ))}
                      </div>

                      <div className="size">
                        <select
                          value={selectedSize[product.id]}
                          onChange={(e) =>
                            handleSizeSelect(product.id, e.target.value)
                          }
                          className="form-control"
                        >
                          {product.size.map((size) => {
                            return (
                              <option value={size} key={size}>
                                {size}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="product-wish-addtocart">
                    <AiOutlineHeart cursor="pointer" size={25} color="#000" />
                    <button href="#" className="addtocart-btn">
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};
