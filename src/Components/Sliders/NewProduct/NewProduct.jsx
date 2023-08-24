import React from "react";
import "./NewProduct.css";
export const NewProduct = () => {
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506152450634-209d83087969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      alt: "Image 1",
      className: "slower",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt: "Image 2",
      className: "faster",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1507793431537-2f8f3745c5a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      alt: "Image 3",
      className: "slower vertical",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1506152450634-209d83087969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      alt: "Image 1",
      className: "slower slower-down",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1506152450634-209d83087969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      alt: "Image 1",
      className: "slower",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt: "Image 2",
      className: "faster",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1507793431537-2f8f3745c5a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      alt: "Image 3",
      className: "slower vertical",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1506152450634-209d83087969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      alt: "Image 1",
      className: "slower slower-down",
    },
    // Добавьте другие объекты картинок по аналогии
  ];
  // Перемешиваем массив images
  const shuffledImages = [...images].sort(() => Math.random() - 0.5);
  return (
    <div className="external">
      <div className="horizontal-scroll-wrapper">
        {shuffledImages.map((image, index) => (
          <div className={`img-wrapper ${image.className}`} key={index}>
            <a href={image.url} target="_blank" rel="noopener">
              <img src={image.url} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
