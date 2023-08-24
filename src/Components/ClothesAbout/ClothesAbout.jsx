import React, { useState, useEffect } from "react";
import styles from "./ClothesAbout.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../Store/addCart/CartActions";
import {
  removeFromFavorites,
  isItemInFavorites,
  addToFavorites,
} from "../../Store/isFavorite/favoriteAction";

import {
  fetchProducts,
  selectColor,
  selectImage,
  selectSize,
  selectProductChildrenId,
} from "../../Store/Products/ProductAction";
import { useParams } from "react-router-dom";
// ligghtbox
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

// components
import Breadcrumbs from "../BreadCrumbs/BreadCrumbs";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import { SwipperOtherProducts } from "../Sliders/OtherProducts/SwipperOtherProducts";

// image
import noProducts from "../../assets/image/No_Product_Found.png";
import noImg from "../../assets/image/no-photo.jpeg";
// mui
import CircularProgress from "@mui/material/CircularProgress";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiTruckLine } from "react-icons/ri";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export const ClothesAbout = () => {
  // const [item, setItem] = useState(() => {
  //   const selectedItem = JSON.parse(localStorage.getItem("selectedItem"));
  //   return selectedItem;
  // });

  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки данных
  const [item, setItem] = useState(null);

  useEffect(() => {
    const selectedItem = JSON.parse(localStorage.getItem("selectedItem"));
    console.log(selectedItem);
    setItem(selectedItem);
    setIsLoading(false); // Установите isLoading в false после загрузки данных
  }, []);

  // по названию сравниваем

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();

  const selectedColor = useSelector(
    (state) => item && state.products.selectedColors[item?.id]
  );
  const selectedSize = useSelector(
    (state) => item && state.products.selectedSizes[item?.id]
  );
  const selectedImage = useSelector(
    (state) => state.products.selectedImages[item?.id]
  );
  const selectedChildId = useSelector(
    (state) => item && state.products.selectedProductChildrenIds[item?.id]
  );
  console.log(selectedColor);
  // состояния
  const favorites = useSelector((state) => state.favorites.favorites);
  const error = useSelector((state) => state.products.error);
  const [uniqueColors, setUniqueColors] = useState([]); // Инициализация локального состояния с помощью хука useState
  const [images, setImages] = useState([]);
  const [isFavorite, setIsFavorite] = useState(() =>
    isItemInFavorites(favorites, item?.id)
  );

  // useEffect(() => {
  //   handleColorClick()
  // }, [selectedColor])

  useEffect(() => {
    console.log("use effect: ", images);
  }, [images]);

  // по умолчанию первый элемент
  useEffect(() => {
    // Эффект хука useEffect, выполняется при изменении зависимостей selectedProduct.product_children и selectedColor
    // debugger;
    if (item?.product_children.length > 0) {
      // Если не выбран цвет и есть дочерние элементы товара
      const firstChild = item?.product_children[0];
      handleColorClick(
        firstChild.color,
        firstChild.image,
        firstChild.size,
        firstChild.id
      ); // Вызываем функцию handleColorClick для установки первого доступного цвета
    }

    const colors = item?.product_children.map((child) => child.color);
    const uniqueColors = [...new Set(colors)];
    setUniqueColors(uniqueColors); // Создаем массив уникальных цветов из дочерних элементов товара

    if (
      !filteredProductChildren?.some((child) => child.size === selectedSize)
    ) {
      // Если выбран цвет и выбранный размер недоступен
      dispatch(selectSize("", item?.id)); // Сбрасываем выбранный размер
    }
  }, [item?.product_children]);

  // проверка на наличие
  const filteredProductChildren = item?.product_children?.filter(
    // Фильтрация дочерних элементов товара по выбранному цвету и доступному количеству
    (child) =>
      child.color === selectedColor && child.quantity > 0 && child.is_available
  );
  // выборе цвета и смена размера и картины
  const handleColorClick = (color, image, size, childId) => {
    console.log(color);
    // Обработчик клика по цвету
    dispatch(selectColor(color, item?.id)); // Устанавливаем выбранный цвет
    dispatch(selectImage(image, item?.id)); // Устанавливаем выбранное изображение
    dispatch(selectSize(size, item?.id)); // Устанавливаем выбранный размер
    dispatch(selectProductChildrenId(childId, item?.id)); // Устанавливаем выбранный дочерний элемент

    const child = item?.product_children.find((child) => child.id === childId);
    const images = child?.images?.map((image) => image?.image) ?? noImg;
    setImages(images);
    dispatch(selectImage(selectedImage, item?.id));
  };
  // добавление в корзину
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
            item?.id,
            selectedChild?.id,
            selectedColor,
            selectedSize,
            selectedChild?.image,
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
  // добавление в избранные
  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(item?.id));
    } else {
      dispatch(addToFavorites(item?.id));
    }
    setIsFavorite(!isFavorite);
  };

  // loading and error
  if (isLoading) {
    return (
      <div className="loading">
        <CircularProgress />
      </div>
    );
  }

  if (error || !item) {
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
    <div className={styles.clothes}>
      <Header />
      <div className="container">
        {/* {products && products.length > 0 && ( */}
        <div className={styles.productUrl}>
          {/* <Breadcrumbs
             routes={[
               { path: "/", label: "Одежда" },
               ...location.pathname.split("/").map((value, index, array) => {
                 const path = array.slice(0, index + 1).join("/");
                 const label = value || "Одежда";

                 return {
                   path: `/${path}`,
                   label: label.charAt(0).toUpperCase() + label.slice(1),
                 };
               }),
             ]}
           /> */}
        </div>

        <div className={styles.wrapper}>
          <div className={styles.content}>
            {item && (item?.length > 0 || item !== null) ? (
              <div className={styles.block}>
                {/* <SlideshowLightbox className={styles.imgBlock}>
                  {filteredProductChildren.map((child) => {
                    const uniqueImage = child.images.find((image) => {
                      return image.image; // Предполагая, что это поле содержит URL изображения
                    });
                    if (uniqueImage) {
                      return (
                        <img
                          key={child.id}
                          src={uniqueImage.image}
                          alt={item.name}
                          className="product-card-img"
                        />
                      );
                    }
                    return null;
                  })}
                </SlideshowLightbox> */}
                <div className={styles.imgBlock}>
                  {images.map((image) => (
                    <SlideshowLightbox key={image}>
                      <img
                        src={image}
                        alt={item?.name}
                        className="product-card-img"
                      />
                    </SlideshowLightbox>
                  ))}
                </div>
                {/* {images.length > 0 && (
                  <div className={styles.imgBlock}>
                    {images.map((image, index) => (
                      <SlideshowLightbox>
                        <img
                          key={index}
                          src={image}
                          alt={item?.name}
                          className="product-card-img"
                        />
                      </SlideshowLightbox>
                    ))}
                  </div>
                )} */}

                <div style={{ position: "relative", height: "100%" }}>
                  <div className={styles.box}>
                    <div className={styles.aboutProduct}>
                      <div className={styles.productNameBlock}>
                        <h1>{item?.name}</h1>
                        <p>{item?.price} $</p>
                      </div>

                      <div className={styles.details}>
                        <p>
                          В наличии:{" "}
                          {item?.is_available ? (
                            <span style={{ color: "green" }}>Есть</span>
                          ) : (
                            <span style={{ color: "red" }}>Нет</span>
                          )}
                        </p>
                        <p>
                          Описание: <br />
                          <span>{item?.description}</span>
                        </p>
                      </div>
                      <div className={styles.color}>
                        <p>Цвет:</p>
                        <div className={styles.colorBlock}>
                          {uniqueColors.map((color) => (
                            <button
                              key={color}
                              className={`color ${
                                selectedColor === color ? "active" : ""
                              }`}
                              style={{ backgroundColor: color }}
                              onClick={() =>
                                handleColorClick(
                                  color,
                                  item?.product_children.find(
                                    (child) => child.color === color
                                  ).image,
                                  item?.product_children.find(
                                    (child) => child.color === color
                                  ).size,
                                  item?.product_children.find(
                                    (child) => child.color === color
                                  ).id
                                )
                              }
                            >
                              {selectedColor === color && (
                                <span className={styles.checkmark}>
                                  &#10004;
                                </span>
                              )}
                            </button>
                          ))}
                          {/* {uniqueColors.map((color) => (
                              <input
                                key={color.id}
                                type="radio"
                                style={{ backgroundColor: color }}
                                className={
                                  styles.optionColor + " " + styles.radio
                                }
                                name="color"
                                defaultChecked={uniqueColors[0]}
                                onClick={() =>
                                  handleColorClick(
                                    color,
                                    item.product_children.find(
                                      (child) => child.color === color
                                    ).image,
                                    item.product_children.find(
                                      (child) => child.color === color
                                    ).size,
                                    item.product_children.find(
                                      (child) => child.color === color
                                    ).id
                                  )
                                }
                              />
                            ))} */}
                        </div>
                      </div>

                      <div className={styles.size}>
                        <p>Размер:</p>
                        {/* {selectedColor && (
                          <div className={styles.sizeBlock}>
                            {filteredProductChildren.map((child) => (
                              <button
                                className={` ${
                                  selectedSize === child.size ? "active" : ""
                                }`}
                                key={child.id}
                                onClick={() =>
                                  dispatch(
                                    selectSize(child.size, item.id)
                                  )
                                }
                              >
                                {child.size}
                              </button>
                            ))}
                          </div>
                        )} */}
                        {selectedColor && (
                          <div className={styles.sizeBlock}>
                            {filteredProductChildren.map((child) => (
                              <div>
                                <label htmlFor="size">{child.size} </label>
                                <input
                                  onChange={(e) =>
                                    dispatch(
                                      selectSize(e.target.value, item.id)
                                    )
                                  }
                                  key={child.id}
                                  checked={child.size === selectedSize}
                                  value={child.size}
                                  type="radio"
                                  className={
                                    styles.optionSize + " " + styles.radio
                                  }
                                  name="size"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className={styles.add}>
                        <div className={styles.addBtn}>
                          <button onClick={handleAddToCart}>
                            Добавить в корзину
                          </button>
                        </div>
                        <div>
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
                        </div>
                      </div>
                    </div>

                    <Box sx={{ width: "100%" }}>
                      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          aria-label="basic tabs example"
                        >
                          <Tab label="О товаре" {...a11yProps(0)} />
                          <Tab label="Доставка" {...a11yProps(1)} />
                          <Tab label="Оплата" {...a11yProps(2)} />
                        </Tabs>
                      </Box>
                      <TabPanel value={value} index={0}>
                        <div className={styles.infoProduct}>
                          {/* <h1>Информация о товаре:</h1> */}
                          <div className={styles.infoProductDetails}>
                            <p>
                              Модель:
                              <span> {item?.zip_code}</span>
                            </p>
                            <p>
                              Категория: <span>{item?.category}</span>
                            </p>
                            <p>
                              Бренд: <span>{item?.brand}</span>
                            </p>
                            <p>
                              Пол: <span>{item?.gender}</span>
                            </p>
                            <p>
                              Сезон: <span>{item?.season}</span>
                            </p>

                            <p>
                              Состав:
                              <span>
                                {" "}
                                65% переработанный хлопок, 35% полиэстер
                              </span>
                            </p>
                            <p>
                              Страна:<span> производитель: ТУРЦИЯ</span>
                            </p>
                            <p>
                              Уход:
                              <span>
                                {" "}
                                Ручная стирка при максимальной температуре 40ºС,
                                Не отбеливать, Машинная сушка запрещена,
                                Глажение при 110ºС, Профессиональная сухая
                                чистка. Мягкий режим.
                              </span>
                            </p>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        <div className={styles.infoProduct}>
                          <div className={styles.infoDescription}>
                            <p>
                              Бесплатная доставка при заказе от 4 000 руб. Вы
                              можете выбрать наиболее подходящий для вас способ
                              доставки товара:
                            </p>
                          </div>

                          <div className={styles.delivery}>
                            <div className={styles.deliveryBlock}>
                              <div>
                                <RiTruckLine size={25} color="#767676" />
                              </div>
                              <div className={styles.deliveryText}>
                                <h2>Курьерская доставка.</h2>
                                <p>Срок – от 1 дня.</p>
                              </div>
                            </div>
                            <div className={styles.deliveryBlock}>
                              <div>
                                <RiTruckLine size={25} color="#767676" />
                              </div>
                              <div className={styles.deliveryText}>
                                <h2>
                                  Доставка в пункты выдачи заказов и постаматы.
                                </h2>
                                <p>Срок – от 1 дня.</p>
                              </div>
                            </div>
                            <div className={styles.deliveryBlock}>
                              <div>
                                <RiTruckLine size={25} color="#767676" />
                              </div>
                              <div className={styles.deliveryText}>
                                <h2>Самовывозом из магазина</h2>
                                <p>Срок – от 1 дня.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel value={value} index={2}>
                        <div className={styles.infoProduct}>
                          <div className={styles.infoDescription}>
                            <p>
                              Для вашего удобства мы предусмотрели разные
                              способы оплаты заказа:
                            </p>
                          </div>

                          <div className={styles.buy}>
                            <div className={styles.buyText}>
                              <b>1.</b> <p>Банковской картой на сайте</p>
                            </div>

                            <div className={styles.buyText}>
                              <b>2.</b> <p>-5% при оплате QR-кодом</p>
                            </div>

                            <div className={styles.buyText}>
                              <b>3.</b>
                              <p>Наличными или картой при получении заказа</p>
                            </div>

                            <div className={styles.buyText}>
                              <b>4.</b>
                              <p>Частями от Халва - оплата покупок частями</p>
                            </div>

                            <div className={styles.buyText}>
                              <b>5.</b>
                              <p>
                                Подели - оплата по частям без комиссии и
                                переплат
                              </p>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    </Box>

                    <div className={styles.social}>
                      <h1>Поделится</h1>
                      <div className={styles.socialBlock}>
                        <div>
                          <BsTelegram size={30} />
                        </div>
                        <div>
                          <BsWhatsapp size={30} />
                        </div>
                        <div>
                          <FaInstagram size={30} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={noProducts} width={300} alt="no products" />
              </div>
            )}
          </div>
        </div>

        <SwipperOtherProducts />

        <Footer />
      </div>
    </div>
  );
};
