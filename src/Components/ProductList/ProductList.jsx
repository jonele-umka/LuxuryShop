// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart, removeFromCart } from "../../Store/addCart/actions";
// import { Link } from "react-router-dom";
// import "./ProductList.css";
// // icons
// import { BsCart3 } from "react-icons/bs";
// import { AiOutlineHeart } from "react-icons/ai";
// // import { Cart } from "../Cart/Cart";

// export default function ProductList({ product }) {

//   const [selectedColor, setSelectedColor] = useState("");
//   const dispatch = useDispatch();

//   const handleColorChange = (color) => {
//     setSelectedColor(color);
//   };

//   const handleAddToCart = () => {
//     const selectedProduct = {
//       ...product,
//       selectedColor,
//     };
//     dispatch(addToCart(selectedProduct));
//   };

//   const handleRemoveFromCart = () => {
//     dispatch(removeFromCart(product.id));
//   };

//   // Получите товары, например, из API и установите их в состояние
//   // useEffect(() => {
//   //   const fetchProducts = async () => {
//   //     // Получите товары из API
//   //     // const fetchedProducts = await yourApiCall();
//   //     // dispatch(setProducts(fetchedProducts));
//   //   };

//   //   fetchProducts();
//   // }, []);

//   return (
//     <>
//       <div>
//         <h3>{product.name}</h3>
//         <img src={product.image} alt={product.name} />
//         <p>Цена: {product.price}</p>
//         <div>
//           Цвета:
//           {product.colors.map((color) => (
//             <button
//               key={color}
//               onClick={() => handleColorChange(color)}
//               style={{ backgroundColor: color }}
//             >
//               {color}
//             </button>
//           ))}
//         </div>
//         <div>
//           Размеры:
//           {product.sizes.map((size) => (
//             <span key={size}>{size} </span>
//           ))}
//         </div>
//         {selectedColor && <p>Выбранный цвет: {selectedColor}</p>}
//         <button onClick={handleAddToCart}>Добавить в корзину</button>
//         <button onClick={handleRemoveFromCart}>Удалить из корзины</button>
//       </div>
//       {/* {products.map((product) => (
//         <div className="product-item">
//           <h3>{product.name}</h3>
//           <img src={product.image} alt={product.name} />
//           <p>Цена: {product.price}</p>
//           <button onClick={handleAddToCart}>Добавить в корзину</button>
//         </div>
//       ))} */}

//       {/* <div className="new">
//         <div className="container">
//           <div className="headText">
//             <h1>НОВИНКИ</h1>
//           </div>

//           <div className="newBlock">
//             {clothingData.map((product) => (
//               <div className="product-card">
//                 {selectedColor && (
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="product-card-img"
//                   />
//                 )}
//                 <div className="product-card-details">
//                   <div className="product-card-names">
//                     <Link
//                       to={{
//                         pathname: `/clothes/${product.name}`,
//                         // state: {
//                         //   name,
//                         //   image,
//                         //   description,
//                         // },
//                       }}
//                       className="product-link"
//                     >
//                       <span className="product-name">{product.name}</span>
//                     </Link>
//                     <span className="product-price">{product.price} $</span>
//                   </div>
//                   <div className="product-size-colors">
//                     <div className="clothesColors">
//                       {product.colors.map((color) => (
//                         <div
//                         // className={`color ${
//                         //   selectedColors[product.id] === color
//                         //     ? "selected"
//                         //     : ""
//                         // }`}
//                         >
//                           <button
//                             key={color}
//                             style={{ backgroundColor: color }}
//                             onClick={() => handleColorChange(color)}
//                           ></button>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="size">
//                       <select
//                         // value={selectedSize[product.id]}
//                         className="form-control"
//                       >
//                         {product.sizes.map((size) => {
//                           return (
//                             <option
//                               onClick={() => handleSizeChange(size)}
//                               value={size}
//                               key={size}
//                             >
//                               {size}
//                             </option>
//                           );
//                         })}
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="product-wish-addtocart">
//                   <AiOutlineHeart cursor="pointer" size={25} color="#000" />
//                   <button onClick={handleAddToCart} className="addtocart-btn">
//                     Добавить в корзину
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bottomText">
//             <Link to={"#"}>ПОСМОТРЕТЬ ВСЕ ТОВАРЫ</Link>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// }
// YourComponent.js
// Product.js
// import React, { useEffect } from "react";
// import "./ProductList.css";
// import { useDispatch, useSelector, connect } from "react-redux";
// // import {
// //   addToCart,
// //   changeSize,
// //   changeColor,
// // } from "../../Store/addCart/CartActions";
// import { fetchProducts } from "../../Store/Products/ProductAction";
// // import { fetchProducts } from "../../Store/addCart/reducer";
// import { Link } from "react-router-dom";
// import { AiOutlineHeart } from "react-icons/ai";

// const ProductList = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products.items);
//   const loading = useSelector((state) => state.products.loading);
//   const error = useSelector((state) => state.products.error);

//   useEffect(() => {
//     dispatch(fetchProducts()); // Запускаем процесс загрузки товаров при монтировании компонента
//   }, [dispatch]);

//   if (loading) {
//     return <div>Loading...</div>; // Отобразить индикатор загрузки или другую информацию о загрузке
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Отобразить сообщение об ошибке
//   }

//   // const handleAddToCart = (item) => {
//   //   const newItem = {
//   //     ...item,
//   //     color: item.colors[0],
//   //     size: item.sizes[0],
//   //   };
//   //   dispatch(addToCart(newItem));
//   // };

//   // const handleColorChange = (item, color) => {
//   //   dispatch(changeColor(item.id, color));
//   // };

//   // const handleSizeChange = (item, size) => {
//   //   dispatch(changeSize(item.id, size));
//   // };

//   return (
//     <div className="new">
//       <div className="container">
//         <div className="headText">
//           <h1>НОВИНКИ</h1>
//         </div>

//         <div className="newBlock">
//           {products.map((item) => (
//             <div key={item.id} className="product-card">
//               {/* {item.colors && item.colors.length > 0 && (
//                 <img
//                   src={item.images[item.colors[0]]}
//                   alt={item.name}
//                   className="product-card-img"
//                 />
//               )} */}
//               <div className="product-card-details">
//                 <div className="product-card-names">
//                   <Link
//                     to={{
//                       pathname: `/clothes/${item.name}`,
//                     }}
//                     className="product-link"
//                   >
//                     <span className="product-name">{item.name}</span>
//                   </Link>
//                   <span className="product-price">{item.price} $</span>
//                 </div>
//                 <div className="product-size-colors">
//                   <div className="clothesColors">
//                     {/* {item.colors && item.colors.length > 0 ? (
//                       item.colors.map((color) => (
//                         <div key={color}>
//                           <button
//                             style={{ backgroundColor: color }}
//                             onClick={() => handleColorChange(item, color)}
//                           ></button>
//                         </div>
//                       ))
//                     ) : (
//                       <p>Нет доступных цветов</p>
//                     )} */}
//                   </div>
//                   {/* {item.sizes && item.sizes.length > 0 ? (
//                     <select
//                       value={item.sizes[0]}
//                       onChange={(e) => handleSizeChange(item, e.target.value)}
//                     >
//                       {item.sizes.map((size) => (
//                         <option key={size} value={size}>
//                           {size}
//                         </option>
//                       ))}
//                     </select>
//                   ) : (
//                     <p>Нет доступных размеров</p>
//                   )} */}
//                 </div>
//               </div>
//               <div className="product-wish-addtocart">
//                 <AiOutlineHeart cursor="pointer" size={25} color="#000" />
//                 <button
//                   // onClick={() => handleAddToCart(item)}
//                   className="addtocart-btn"
//                 >
//                   Добавить в корзину
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="bottomText">
//           <Link to={"#"}>ПОСМОТРЕТЬ ВСЕ ТОВАРЫ</Link>
//         </div>
//       </div>
//     </div>
//   );
// };
// const mapStateToProps = (state) => {
//   return {
//     products: state.products,
//   };
// };
// export default connect(mapStateToProps)(ProductList);
// ProductList.js
import React, { useEffect } from "react";
import styles from "./ProductList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectImage,
  selectSize,
  selectColor,
} from "../../Store/Products/ProductAction";
import { Link } from "react-router-dom";
// components
import ProductItem from "../ProductItem/ProductItem";
// image
import noProducts from "../../assets/image/No_Product_Found.png";
// mui
import CircularProgress from "@mui/material/CircularProgress";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  // useEffect(() => {
  //   if (products.length > 0) {
  //     const firstProduct = products[0];
  //     const firstChild = firstProduct.product_children[0];
  //     dispatch(selectColor(firstChild.color));
  //     dispatch(selectImage(firstChild.image));
  //     dispatch(selectSize(firstChild.size));
  //   }
  // }, [products, dispatch]);

  // Отфильтровываем продукты с is_available равным true
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
        }}
      >
        <img src={noProducts} width={300} alt="no products" />
      </div>
    );
  }

  return (
    <div className={styles.new}>
      <div className="container">
        {products && products.length > 0 && (
          <div className="headeText">
            <h1>НАШИ ПРОДУКТЫ</h1>
          </div>
        )}

        <div className={styles.newBlock}>
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
  );
};

export default ProductList;
