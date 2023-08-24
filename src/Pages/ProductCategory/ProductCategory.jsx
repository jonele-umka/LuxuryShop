import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectImage,
  selectSize,
  selectColor,
} from "../../Store/Products/ProductAction";
import { addToCart } from "../../Store/addCart/CartActions";
import { setCategory } from "../../Store/Filter/FilterAction";
import { AiOutlineHeart } from "react-icons/ai";
import Footer from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import ProductItem from "../../Components/ProductItem/ProductItem";

// Предположим, у вас есть массив всех товаров
//   const products = [
//     {
//       id: 1,
//       name: "Shirt",
//       price: 25.99,
//       size: ["M", "S", "SX", "XS", "XXS", "XXXS"],
//       colors: ["red", "blue", "green"],
//       images: {
//         red: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
//         blue: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
//         green:
//           "https://images.unsplash.com/photo-1604072374690-0e7d7bddd54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
//       },
//       category: "man-clothing",
//     },
//     {
//       id: 23,
//       name: "Куртка",
//       price: 25.99,
//       size: ["M", "S", "SX", "XS", "XXS", "XXXS"],
//       colors: ["red", "blue", "green"],
//       images: {
//         red: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
//         blue: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
//         green:
//           "https://images.unsplash.com/photo-1604072374690-0e7d7bddd54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
//       },
//       category: "man-clothing",
//     },
//     {
//       id: 2,
//       name: "Jeans",
//       price: 49.99,
//       size: ["M", "S", "SX"],
//       colors: ["black", "blue", "gray"],
//       images: {
//         black: "https://i.imgur.com/PJ1d7Mf.jpg",
//         blue: "https://i.imgur.com/2bgB8tA.jpg",
//         gray: "https://i.imgur.com/LJdjLhM.jpg",
//       },
//       category: "womens-clothing",
//     },
//     {
//       id: 3,
//       name: "Sneakers",
//       price: 79.99,
//       size: ["M", "S", "SX"],
//       colors: ["white", "black", "red"],
//       images: {
//         white: "https://i.imgur.com/HwQ2fNJ.jpg",
//         black: "https://i.imgur.com/vtwf8Tj.jpg",
//         red: "https://i.imgur.com/y2I4vAz.jpg",
//       },
//       category: "jackets",
//     },
//   ];
export const ProductCategory = () => {
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  return (
    <div>
      <Header />
      <div>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      {/* <div className="new">
        <div className="container">
          <div className="headText"> </div>

          <div className="newBlock">
            {filteredProducts.map((item) => {
              return (
                <div key={item.id} className="product-card">
                  <img
                    src={
                      selectedColor === item.product_children[0].color
                        ? item.product_children[0].image
                        : selectedImage
                    }
                    alt={item.name}
                    className="product-card-img"
                  />
                  <div className="product-card-details">
                    <div className="product-card-names">
                      <Link
                        to={`/clothes/${item.name}`}
                        className="product-link"
                      >
                        <span className="product-name">{item.name}</span>
                      </Link>
                      <span className="product-price">{item.price} $</span>
                    </div>
                    <div className="product-size-colors">
                      <div className="clothesColors">
                        {item.product_children.map((child) => (
                          <div
                            key={child.id}
                            className={`color ${
                              selectedColor === child.color ? "active" : ""
                            }`}
                          >
                            <button
                              style={{
                                backgroundColor: child.color,
                              }}
                              onClick={() => {
                                dispatch(selectColor(child.color));
                                dispatch(selectImage(child.image));
                                dispatch(selectSize(child.size));
                              }}
                            ></button>
                          </div>
                        ))}
                      </div>
                      <div className="size">
                        {selectedColor && (
                          <select
                            value={selectedSize}
                            onChange={(e) =>
                              dispatch(selectSize(e.target.value))
                            }
                          >
                            {item.product_children
                              .filter((child) => child.color === selectedColor)
                              .map((child) => (
                                <option key={child.id} value={child.size}>
                                  {child.size}
                                </option>
                              ))}
                          </select>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="product-wish-addtocart">
                    <AiOutlineHeart cursor="pointer" size={25} color="#000" />
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="addtocart-btn"
                    >
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
      <Footer />
    </div>

    // <div>
    //   <h1>Товары - {category}</h1>
    //   {filteredProducts.map((product) => (
    //     <div key={product.id}>
    //       <h3>{product.name}</h3>
    //     </div>
    //   ))}
    // </div>
  );
};
