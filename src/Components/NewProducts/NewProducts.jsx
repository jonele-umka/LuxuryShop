import React from "react";
import { Link } from "react-router-dom";
import styles from "./NewProducts.module.css";
export const NewProducts = () => {
  const images = [
    {
      id: 1,
      name: "Shirt",
      price: 25.99,
      url: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      alt: "Image 1",
    },
    {
      id: 2,
      name: "Спортивка",
      price: 25.99,
      url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80",
      alt: "Image 2",
    },
    {
      id: 3,
      name: "Shirtynynbb",
      price: 25.99,
      url: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      alt: "Image 3",
    },
    {
      id: 4,
      name: "Shirt45gteg",
      price: 25.99,
      url: "https://images.unsplash.com/photo-1639926783705-34fedf78685d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80",
      alt: "Image 4",
    },
    {
      id: 5,
      name: "Shirbgbgbgbgt",
      price: 25.99,
      url: "https://images.unsplash.com/photo-1641299560198-f251ccd3639f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1124&q=80",
      alt: "Image 5",
    },
    {
      id: 6,
      name: "S323r32rhirt",
      price: 25.99,
      url: "https://images.unsplash.com/photo-1612215326956-c2bb6228c72d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      alt: "Image 6",
    },
    // {
    //   id: 7,
    //   name: "Shirgtr4grt",
    //   price: 25.99,
    //   url: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    //   alt: "Image 1",
    // },
    // {
    //   id: 8,
    //   name: "Shigrgrert",
    //   price: 25.99,
    //   url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80",
    //   alt: "Image 2",
    // },
    // {
    //   id: 9,
    //   name: "Shirtt43gre",
    //   price: 25.99,
    //   url: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    //   alt: "Image 3",
    // },
    // {
    //   id: 10,
    //   name: "Shigreg4rt",
    //   price: 25.99,
    //   url: "https://images.unsplash.com/photo-1639926783705-34fedf78685d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80",
    //   alt: "Image 4",
    // },
    // {
    //   id: 11,
    //   name: "Shirgr4grvfft",
    //   price: 25.99,
    //   url: "https://images.unsplash.com/photo-1641299560198-f251ccd3639f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1124&q=80",
    //   alt: "Image 5",
    // },
    // {
    //   id: 12,
    //   name: "Shig4grvrert",
    //   price: 25.99,
    //   url: "https://images.unsplash.com/photo-1612215326956-c2bb6228c72d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    //   alt: "Image 6",
    // },
    // Добавьте другие объекты картинок по аналогииh
  ];

  return (
    <div className={styles.new}>
      <div className="container">
        <div className='headerText'>
          <h1>Другие товары</h1>
        </div>
        <div className={styles.galleryWrap}>
          {images.map((image) => (
            <div
              style={{ backgroundImage: `url(${image.url})` }}
              key={image.id}
              className={styles.newItem}
              alt={image.alt}
            >
              <div className={styles.infoClothes}>
                <div>
                  <h1>{image.name}</h1>
                  <Link to={"/clothes"}>Посмотреть</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
