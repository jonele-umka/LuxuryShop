// import React, { useState } from "react";
// import styles from "./Categories.module.css";
// import { ImageList, ImageListItem, Box } from "@mui/material";
// import { styled } from "@mui/material/styles";

// export const Categories = () => {
//   const itemData = [
//     {
//       img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
//       title: "Chairs",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
//       title: "Футболки",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
//       title: "Laptop",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
//       title: "Куртки",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
//       title: "Kitchen",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
//       title: "Books",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
//       title: "Джинсы",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
//       title: "Doors",
//     },

//     {
//       img: "https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
//       title: "Джинсы",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
//       title: "Coffee",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
//       title: "Storage",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
//       title: "Coffee",
//     },
//   ];
//   const ImageListItemStyles = styled(ImageListItem)({
//     height: "400px !important",
//     width: "auto !important",
//   });
//   return (
//     <>
//       <div className={styles.categories}>
//         <div className="container">
// {/* <div className={styles.headText}>
//   <h1>Категории</h1>
// </div> */}
//         </div>

//         <Box>
//           <ImageList variant="masonry" cols={4} gap={5}>
//             {itemData.map((item) => (
//               <ImageListItemStyles key={item.img}>
//                 <img
//                   className={styles.categoriesImg}
//                   src={`${item.img}?w=248&fit=crop&auto=format`}
//                   srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                   alt={item.title}
//                   loading="lazy"
//                 />
//                 <h1 className={styles.categoriesTitle}>{item.title}</h1>
//               </ImageListItemStyles>
//             ))}
//           </ImageList>
//         </Box>
//       </div>
//     </>
//   );
// };
import React from "react";
import "./Categories.css";
export const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        <div className="headerText">
          <h1>Категории</h1>
        </div>
        <div className="grid-wrapper">
          <div className="image-box">
            <img
              src="https://images.unsplash.com/photo-1591348278900-019a8a2a8b1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
              alt=""
            />
            <div className="overlay">
              <div className="details">
                <div className="title">
                  <h4>Сумки</h4>
                </div>
                <span className="category">
                  <a href="/clothes">Посмотреть</a>
                </span>
              </div>
            </div>
          </div>

          <div className="image-box">
            <img
              src="https://images.unsplash.com/photo-1565462905097-5e701c31dcfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8UWl6N0tmY3VTeUF8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
            <div className="overlay">
              <div className="details">
                <div className="title">
                  <h4>Платья</h4>
                </div>
                <span className="category">
                  <a href="#">Посмотреть</a>
                </span>
              </div>
            </div>
          </div>
          <div className="tall image-box">
            <img
              src="https://images.unsplash.com/photo-1631549889629-6929059a8883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
              alt=""
            />
            <div className="overlay">
              <div className="details">
                <div className="title">
                  <h4>Футболки</h4>
                </div>
                <span className="category">
                  <a href="#">Посмотреть</a>
                </span>
              </div>
            </div>
          </div>
          <div className="big image-box">
            <img
              src="https://images.unsplash.com/photo-1507980668227-a52aa457699b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
            <div className="overlay">
              <div className="details">
                <div className="title">
                  <h4>Брюки</h4>
                </div>
                <span className="category">
                  <a href="#">Посмотреть</a>
                </span>
              </div>
            </div>
          </div>
          <div className="image-box">
            <img
              src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
            <div className="overlay">
              <div className="details">
                <div className="title">
                  <h4>Рубашки</h4>
                </div>
                <span className="category">
                  <a href="#">Посмотреть</a>
                </span>
              </div>
            </div>
          </div>

          <div className="image-box">
            <img
              src="https://images.unsplash.com/photo-1509182469511-7f0b50bfa63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
            <div className="overlay">
              <div className="details">
                <div className="title">
                  <h4>Юбки</h4>
                </div>
                <span className="category">
                  <a href="#">Посмотреть</a>
                </span>
              </div>
            </div>
          </div>
          <div className="big image-box">
            <img
              src="https://images.unsplash.com/photo-1614358519874-0101b3c26d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
              alt=""
            />
            <div className="overlay">
              <div className="details">
                <div className="title">
                  <h4>Куртки</h4>
                </div>
                <span className="category">
                  <a href="#">Посмотреть</a>
                </span>
              </div>
            </div>
          </div>
          <div className="tall image-box">
            <img
              src="https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <div className="overlay">
              <div className="details">
                <div className="title">
                  <h4>Джинсы</h4>
                </div>
                <span className="category">
                  <a href="#">Посмотреть</a>
                </span>
              </div>
            </div>
          </div>
          <div className="image-box">
            <img
              src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
            <div className="overlay">
              <div className="details">
                <div className="title">
                  <h4>Свитшоты</h4>
                </div>
                <span className="category">
                  <a href="#">Посмотреть</a>
                </span>
              </div>
            </div>
          </div>
          <div className="image-box">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
            <div className="overlay">
              <div className="details">
                <div className="title">
                  <h4>Обувь</h4>
                </div>
                <span className="category">
                  <a href="#">Посмотреть</a>
                </span>
              </div>
            </div>
          </div>
          <div className="wide image-box">
            <img
              src="https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
            <div className="overlay">
              <div className="details">
                <div className="title">
                  <h4>Аксессуары</h4>
                </div>
                <span className="category">
                  <a href="#">Посмотреть</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
