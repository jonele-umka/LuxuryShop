import React, { useEffect, useState, useRef } from "react";
import "./ProductItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Store/addCart/CartActions";
import { addToFavorites } from "../../Store/isFavorite/favoriteAction";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  selectColor,
  selectImage,
  selectSize,
  selectProductChildrenId,
} from "../../Store/Products/ProductAction";
import { removeFromFavorites } from "../../Store/isFavorite/favoriteAction";
// image
import noImg from "../../assets/image/no-photo.jpeg";

const ProductItem = ({ item, isInFavorites }) => {
  const dispatch = useDispatch(); // Инициализация функции useDispatch для отправки экшенов в Redux store

  // Извлечение значений из состояния Redux store с помощью хука useSelector
  const selectedColor = useSelector(
    (state) => state.products.selectedColors[item.id]
  );
  const selectedSize = useSelector(
    (state) => state.products.selectedSizes[item.id]
  );
  const selectedImage = useSelector(
    (state) => state.products.selectedImages[item.id]
  );
  const selectedChildId = useSelector(
    (state) => state.products.selectedProductChildrenIds[item.id]
  );

  const [uniqueColors, setUniqueColors] = useState([]); // Инициализация локального состояния с помощью хука useState
  const [isFavorite, setIsFavorite] = useState(isInFavorites);
  useEffect(() => {
    // Эффект хука useEffect, выполняется при изменении зависимостей item.product_children и selectedColor

    if (!selectedColor && item.product_children.length > 0) {
      // Если не выбран цвет и есть дочерние элементы товара
      const firstChild = item.product_children[0];
      handleColorClick(
        firstChild.color,
        firstChild.image,
        firstChild.size,
        firstChild.id
      ); // Вызываем функцию handleColorClick для установки первого доступного цвета
    }

    const colors = item.product_children.map((child) => child.color);
    const uniqueColors = [...new Set(colors)];
    setUniqueColors(uniqueColors); // Создаем массив уникальных цветов из дочерних элементов товара

    if (
      selectedColor &&
      !filteredProductChildren.some((child) => child.size === selectedSize)
    ) {
      // Если выбран цвет и выбранный размер недоступен
      dispatch(selectSize("", item.id)); // Сбрасываем выбранный размер
    }
  }, [item.product_children, selectedColor]);

  const filteredProductChildren = item.product_children.filter(
    // Фильтрация дочерних элементов товара по выбранному цвету и доступному количеству
    (child) =>
      child.color === selectedColor && child.quantity > 0 && child.is_available
  );

  const handleColorClick = (color, image, size, childId) => {
    // Обработчик клика по цвету
    dispatch(selectProductChildrenId(childId, item.id)); // Устанавливаем выбранный дочерний элемент
    dispatch(selectColor(color, item.id)); // Устанавливаем выбранный цвет
    dispatch(selectImage(image, item.id)); // Устанавливаем выбранное изображение
    dispatch(selectSize(size, item.id)); // Устанавливаем выбранный размер
    // Выбираем первое изображение из массива изображений дочернего элемента
    const child = item.product_children.find((child) => child.id === childId);
    const selectedImage = child?.images?.[0]?.image ?? noImg;
    dispatch(selectImage(selectedImage, item.id));
  };
  // в корзину
  const handleAddToCart = () => {
    // Обработчик добавления товара в корзину
    if (filteredProductChildren.length > 0 && selectedChildId) {
      // Если есть доступные варианты товара и выбран дочерний элемент
      const selectedChild = filteredProductChildren.find(
        (child) => child.size === selectedSize
      );

      if (selectedChild && selectedChild.quantity > 0) {
        // Если выбранный размер доступен и его количество больше 0
        dispatch(
          addToCart(
            item.id,
            selectedChild.id,
            selectedColor,
            selectedSize,
            selectedChild.images[0].image,
            1
          )
        ); // Добавляем товар в корзину
      } else {
        console.log("Selected size is not available or out of stock.");
        // Выводим сообщение об ошибке, когда выбранный размер недоступен или его количество равно 0
      }
    } else {
      console.log("No available product options.");
      // Выводим сообщение об ошибке, когда нет доступных вариантов товара
    }
  };
  // в избранное
  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(item.id));
    } else {
      dispatch(addToFavorites(item.id));
    }
    setIsFavorite(!isFavorite);
  };

  const clothesAbout = () => {
    localStorage.setItem("selectedItem", JSON.stringify(item));
    console.log(item);
  };
  return (
    <div key={item.id} className="product-card">
      <img
        src={selectedImage || noImg}
        alt={item.name}
        className="product-card-img"
      />
      <div className="product-card-details">
        <div className="product-card-names">
          <Link
            onClick={clothesAbout}
            to={`/clothesAbout/${item.name}`}
            className="product-link"
          >
            <span className="product-name">{item.name}</span>
          </Link>
          <span className="product-price">{item.price} $</span>
        </div>
        <div className="product-size-colors">
          <div className="clothesColors">
            {uniqueColors.map((color) => (
              <div
                key={color}
                className={`color ${selectedColor === color ? "active" : ""}`}
              >
                <button
                  style={{ backgroundColor: color }}
                  onClick={() =>
                    handleColorClick(
                      color,
                      item.product_children.find(
                        (child) => child.color === color
                      ).images[0].image,
                      item.product_children.find(
                        (child) => child.color === color
                      ).size,
                      item.product_children.find(
                        (child) => child.color === color
                      ).id
                    )
                  }
                ></button>
              </div>
            ))}
          </div>
          <div className="size">
            {selectedColor && (
              <select
                value={selectedSize}
                onChange={(e) => dispatch(selectSize(e.target.value, item.id))}
              >
                {filteredProductChildren.map((child) => (
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
        {isFavorite ? (
          <AiFillHeart
            onClick={handleToggleFavorite}
            cursor="pointer"
            size={25}
            color="#ca0000" // Change the color or style to indicate the item is not in favorites
          />
        ) : (
          <AiOutlineHeart
            onClick={handleToggleFavorite}
            cursor="pointer"
            size={25}
            color="#222" // Change the color or style to indicate the item is already in favorites
          />
        )}
        <button onClick={handleAddToCart} className="addtocart-btn">
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};
export default ProductItem;

// import React, { useEffect, useState, useRef } from "react";
// import "./ProductItem.css";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../Store/addCart/CartActions";
// import { addToFavorites } from "../../Store/isFavorite/favoriteAction";
// import { Link } from "react-router-dom";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// import {
//   selectColor,
//   selectImage,
//   selectSize,
//   selectProductChildrenId,
// } from "../../Store/Products/ProductAction";
// import { removeFromFavorites } from "../../Store/isFavorite/favoriteAction";

// const ProductItem = ({ item, isInFavorites }) => {
//   const dispatch = useDispatch(); // Инициализация функции useDispatch для отправки экшенов в Redux store

//   // Извлечение значений из состояния Redux store с помощью хука useSelector
//   const selectedColor = useSelector(
//     (state) => state.products.selectedColors[item.id]
//   );
//   const selectedSize = useSelector(
//     (state) => state.products.selectedSizes[item.id]
//   );
//   const selectedImage = useSelector(
//     (state) => state.products.selectedImages[item.id]
//   );
//   const selectedChildId = useSelector(
//     (state) => state.products.selectedProductChildrenIds[item.id]
//   );

//   const [uniqueColors, setUniqueColors] = useState([]); // Инициализация локального состояния с помощью хука useState
//   const [isFavorite, setIsFavorite] = useState(isInFavorites);
//   useEffect(() => {
//     // Эффект хука useEffect, выполняется при изменении зависимостей item.product_children и selectedColor

//     if (!selectedColor && item.product_children.length > 0) {
//       // Если не выбран цвет и есть дочерние элементы товара
//       const firstChild = item.product_children[0];
//       handleColorClick(
//         firstChild.color,
//         firstChild.image,
//         firstChild.size,
//         firstChild.id
//       ); // Вызываем функцию handleColorClick для установки первого доступного цвета
//     }

//     const colors = item.product_children.map((child) => child.color);
//     const uniqueColors = [...new Set(colors)];
//     setUniqueColors(uniqueColors); // Создаем массив уникальных цветов из дочерних элементов товара

//     if (
//       selectedColor &&
//       !filteredProductChildren.some((child) => child.size === selectedSize)
//     ) {
//       // Если выбран цвет и выбранный размер недоступен
//       dispatch(selectSize("", item.id)); // Сбрасываем выбранный размер
//     }
//   }, [item.product_children, selectedColor]);

//   const filteredProductChildren = item.product_children.filter(
//     // Фильтрация дочерних элементов товара по выбранному цвету и доступному количеству
//     (child) =>
//       child.color === selectedColor && child.quantity > 0 && child.is_available
//   );

//   const handleColorClick = (color, image, size, childId) => {
//     // Обработчик клика по цвету
//     dispatch(selectProductChildrenId(childId, item.id)); // Устанавливаем выбранный дочерний элемент
//     dispatch(selectColor(color, item.id)); // Устанавливаем выбранный цвет
//     dispatch(selectImage(image, item.id)); // Устанавливаем выбранное изображение
//     dispatch(selectSize(size, item.id)); // Устанавливаем выбранный размер
//   };

//   const handleAddToCart = () => {
//     // Обработчик добавления товара в корзину
//     if (filteredProductChildren.length > 0 && selectedChildId) {
//       // Если есть доступные варианты товара и выбран дочерний элемент
//       const selectedChild = filteredProductChildren.find(
//         (child) => child.size === selectedSize
//       );

//       if (selectedChild && selectedChild.quantity > 0) {
//         // Если выбранный размер доступен и его количество больше 0
//         dispatch(
//           addToCart(
//             item.id,
//             selectedChild.id,
//             selectedColor,
//             selectedSize,
//             selectedChild.image,
//             1
//           )
//         ); // Добавляем товар в корзину
//       } else {
//         console.log("Selected size is not available or out of stock.");
//         // Выводим сообщение об ошибке, когда выбранный размер недоступен или его количество равно 0
//       }
//     } else {
//       console.log("No available product options.");
//       // Выводим сообщение об ошибке, когда нет доступных вариантов товара
//     }
//   };

//   const handleToggleFavorite = () => {
//     if (isFavorite) {
//       dispatch(removeFromFavorites(item.id));
//     } else {
//       dispatch(addToFavorites(item.id));
//     }
//     setIsFavorite(!isFavorite);
//   };

//   return (
//     <div key={item.id} className="product-card">
//       <img
//         src={
//           selectedColor === item.product_children[0].color
//             ? item.product_children[0]
//             : selectedImage
//         }
//         alt={item.name}
//         className="product-card-img"
//       />
//       <div className="product-card-details">
//         <div className="product-card-names">
//           <Link to={`/clothesAbout/${item.name}`} className="product-link">
//             <span className="product-name">{item.name}</span>
//           </Link>
//           <span className="product-price">{item.price} $</span>
//         </div>
//         <div className="product-size-colors">
//           <div className="clothesColors">
//             {uniqueColors.map((color) => (
//               <div
//                 key={color}
//                 className={`color ${selectedColor === color ? "active" : ""}`}
//               >
//                 <button
//                   style={{ backgroundColor: color }}
//                   onClick={() =>
//                     handleColorClick(
//                       color,
//                       item.product_children.find(
//                         (child) => child.color === color
//                       ).image,
//                       item.product_children.find(
//                         (child) => child.color === color
//                       ).size,
//                       item.product_children.find(
//                         (child) => child.color === color
//                       ).id
//                     )
//                   }
//                 ></button>
//               </div>
//             ))}
//           </div>
//           <div className="size">
//             {selectedColor && (
//               <select
//                 value={selectedSize}
//                 onChange={(e) => dispatch(selectSize(e.target.value, item.id))}
//               >
//                 {filteredProductChildren.map((child) => (
//                   <option key={child.id} value={child.size}>
//                     {child.size}
//                   </option>
//                 ))}
//               </select>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="product-wish-addtocart">
//         {isFavorite ? (
//           <AiFillHeart
//             onClick={handleToggleFavorite}
//             cursor="pointer"
//             size={25}
//             color="#ca0000" // Change the color or style to indicate the item is not in favorites
//           />
//         ) : (
//           <AiOutlineHeart
//             onClick={handleToggleFavorite}
//             cursor="pointer"
//             size={25}
//             color="#222" // Change the color or style to indicate the item is already in favorites
//           />
//         )}
//         <button onClick={handleAddToCart} className="addtocart-btn">
//           Добавить в корзину
//         </button>
//       </div>
//     </div>
//   );
// };
// export default ProductItem;
