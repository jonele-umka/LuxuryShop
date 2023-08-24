// import React, { useState, useEffect } from "react";
// import styles from "./ClothesItem.module.css";
// import { useSelector, useDispatch } from "react-redux";

// // ligghtbox
// import { SlideshowLightbox } from "lightbox.js-react";
// import "lightbox.js-react/dist/index.css";

// // components
// import { Header } from "../../Header/Header";
// import Footer from "../../Footer/Footer";
// import { SwipperOtherProducts } from "../../Sliders/OtherProducts/SwipperOtherProducts";
// // mui
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import CircularProgress from "@mui/material/CircularProgress";
// // icons
// import { AiOutlineHeart } from "react-icons/ai";
// import { RiTruckLine } from "react-icons/ri";
// import { BsWhatsapp, BsTelegram } from "react-icons/bs";
// import { FaInstagram } from "react-icons/fa";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }
// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export const ClothesItem = ({ item, selectedProduct }) => {
//   // Инициализация функции useDispatch для отправки экшенов в Redux store
//   const dispatch = useDispatch();

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
//     (child) => child.color === selectedColor && child.quantity > 0
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

//   // const { id } = useParams();

//   // useEffect(() => {
//   //   const fetchProduct = async () => {
//   //     try {
//   //       const response = await fetch(
//   //         `http://127.0.0.1:8000/shop/product/${id}/`
//   //       );
//   //       const data = await response.json();
//   //       dispatch(setSelectedProduct(data));
//   //       setLoading(false);

//   //       // Сохраняем данные продукта в куки или локальное хранилище
//   //       localStorage.setItem("selectedProduct", JSON.stringify(data));
//   //     } catch (error) {
//   //       console.log("Ошибка при загрузке данных продукта:", error);
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchProduct();
//   // }, [dispatch, id]);
//   // useEffect(() => {
//   //   const cookieData = localStorage.getItem("selectedProduct");

//   //   if (cookieData) {
//   //     const parsedData = JSON.parse(cookieData);
//   //     dispatch(setSelectedProduct(parsedData));
//   //     setLoading(false);
//   //   }
//   // }, [dispatch]);

//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={styles.block}>
//       <div>
//         <SlideshowLightbox className={styles.imgBlock}>
//           {selectedProduct.images.map((image) => (
//             <img
//               key={image.id}
//               src={image.image}
//               alt={selectedProduct.name}
//               className={styles.thumbsImg}
//             />
//           ))}
//         </SlideshowLightbox>
//       </div>

//       <div style={{ position: "relative", height: "100%" }}>
//         <div className={styles.box}>
//           <form>
//             <div className={styles.aboutProduct}>
//               <div className={styles.productNameBlock}>
//                 <h1>{selectedProduct.name}</h1>
//                 <p>{selectedProduct.price} $</p>
//               </div>

//               <div className={styles.details}>
//                 <p>
//                   В наличии:{" "}
//                   <span>{selectedProduct.product_children.is_available}</span>{" "}
//                 </p>
//                 <p>
//                   Описание:
//                   <span>{selectedProduct.description}</span>
//                 </p>
//               </div>

//               <div className={styles.productColors}>
//                 {selectedProduct.product_children
//                   .filter(
//                     (child, index, self) =>
//                       self.findIndex((c) => c.color === child.color) === index
//                   )
//                   .map((child) => (
//                     <div key={child.id}>
//                       <button
//                         style={{
//                           backgroundColor: child.color,
//                         }}
//                         onClick={() => dispatch(selectColor(child.color))}
//                         className={
//                           selectedColor === child.color
//                             ? styles.selectedColor
//                             : ""
//                         }
//                       ></button>
//                     </div>
//                   ))}
//               </div>

//               <div className={styles.sizeBlock}>
//                 {selectedProduct.product_children
//                   .filter(
//                     (child, index, self) =>
//                       self.findIndex((c) => c.size === child.size) === index
//                   )
//                   .map((child) => (
//                     <div key={child.id}>
//                       <button
//                         onClick={() => dispatch(selectSize(child.size))}
//                         className={
//                           selectedSize === child.size ? styles.selectedSize : ""
//                         }
//                       >
//                         {child.size}
//                       </button>
//                     </div>
//                   ))}
//               </div>

//               <div className={styles.add}>
//                 <div className={styles.addBtn}>
//                   <button
//                     onClick={() =>
//                       handleAddToCart(
//                         selectedProduct,
//                         selectedColor,
//                         selectedSize
//                       )
//                     }
//                   >
//                     Добавить в корзину
//                   </button>
//                 </div>
//                 <div>
//                   <AiOutlineHeart cursor="pointer" size={35} color="#000" />
//                 </div>
//               </div>
//             </div>
//           </form>
//           <Box sx={{ width: "100%" }}>
//             <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 aria-label="basic tabs example"
//               >
//                 <Tab label="О товаре" {...a11yProps(0)} />
//                 <Tab label="Доставка" {...a11yProps(1)} />
//                 <Tab label="Оплата" {...a11yProps(2)} />
//               </Tabs>
//             </Box>
//             <TabPanel value={value} index={0}>
//               <div className={styles.infoProduct}>
//                 {/* <h1>Информация о товаре:</h1> */}
//                 <div className={styles.infoProductDetails}>
//                   <p>
//                     Модель:
//                     <span> {selectedProduct.zip_code}</span>
//                   </p>
//                   <p>
//                     Категория: <span>{selectedProduct.category}</span>
//                   </p>
//                   <p>
//                     Бренд: <span>{selectedProduct.brand}</span>
//                   </p>
//                   <p>
//                     Пол: <span>{selectedProduct.gender}</span>
//                   </p>
//                   <p>
//                     Сезон: <span>{selectedProduct.season}</span>
//                   </p>

//                   <p>
//                     Состав:
//                     <span> 65% переработанный хлопок, 35% полиэстер</span>
//                   </p>
//                   <p>
//                     Страна:<span> производитель: ТУРЦИЯ</span>
//                   </p>
//                   <p>
//                     Уход:
//                     <span>
//                       {" "}
//                       Ручная стирка при максимальной температуре 40ºС, Не
//                       отбеливать, Машинная сушка запрещена, Глажение при 110ºС,
//                       Профессиональная сухая чистка. Мягкий режим.
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             </TabPanel>
//             <TabPanel value={value} index={1}>
//               <div className={styles.infoProduct}>
//                 <div className={styles.infoDescription}>
//                   <p>
//                     Бесплатная доставка при заказе от 4 000 руб. Вы можете
//                     выбрать наиболее подходящий для вас способ доставки товара:
//                   </p>
//                 </div>

//                 <div className={styles.delivery}>
//                   <div className={styles.deliveryBlock}>
//                     <div>
//                       <RiTruckLine size={25} color="#767676" />
//                     </div>
//                     <div className={styles.deliveryText}>
//                       <h2>Курьерская доставка.</h2>
//                       <p>Срок – от 1 дня.</p>
//                     </div>
//                   </div>
//                   <div className={styles.deliveryBlock}>
//                     <div>
//                       <RiTruckLine size={25} color="#767676" />
//                     </div>
//                     <div className={styles.deliveryText}>
//                       <h2>Доставка в пункты выдачи заказов и постаматы.</h2>
//                       <p>Срок – от 1 дня.</p>
//                     </div>
//                   </div>
//                   <div className={styles.deliveryBlock}>
//                     <div>
//                       <RiTruckLine size={25} color="#767676" />
//                     </div>
//                     <div className={styles.deliveryText}>
//                       <h2>Самовывозом из магазина</h2>
//                       <p>Срок – от 1 дня.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </TabPanel>
//             <TabPanel value={value} index={2}>
//               <div className={styles.infoProduct}>
//                 <div className={styles.infoDescription}>
//                   <p>
//                     Для вашего удобства мы предусмотрели разные способы оплаты
//                     заказа:
//                   </p>
//                 </div>

//                 <div className={styles.buy}>
//                   <div className={styles.buyText}>
//                     <b>1.</b> <p>Банковской картой на сайте</p>
//                   </div>

//                   <div className={styles.buyText}>
//                     <b>2.</b> <p>-5% при оплате QR-кодом</p>
//                   </div>

//                   <div className={styles.buyText}>
//                     <b>3.</b>
//                     <p>Наличными или картой при получении заказа</p>
//                   </div>

//                   <div className={styles.buyText}>
//                     <b>4.</b>
//                     <p>Частями от Халва - оплата покупок частями</p>
//                   </div>

//                   <div className={styles.buyText}>
//                     <b>5.</b>
//                     <p>Подели - оплата по частям без комиссии и переплат</p>
//                   </div>
//                 </div>
//               </div>
//             </TabPanel>
//           </Box>

//           <div className={styles.social}>
//             <h1>Поделится</h1>
//             <div className={styles.socialBlock}>
//               <div>
//                 <BsTelegram size={30} />
//               </div>
//               <div>
//                 <BsWhatsapp size={30} />
//               </div>
//               <div>
//                 <FaInstagram size={30} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
