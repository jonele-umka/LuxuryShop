// import React, { useEffect, useState } from "react";
// import './Main.css'
// // image
// import lv from '../..//assets/image/mainBackground/louisV.png'
// export const Main = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPreviousSlide, setIsPreviousSlide] = useState(false);
//   const [isFirstLoad, setIsFirstLoad] = useState(true);

//   const slides = [
//     {
//       headlineFirstLine: "Lorem",
//       headlineSecondLine: "Vitaer",
//       sublineFirstLine: "Nihil sub sole",
//       sublineSecondLine: "novum",
//       bgImg: 'https://images.unsplash.com/photo-1526743851649-2282229bac05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//       rectImg: 'https://images.unsplash.com/photo-1526743851649-2282229bac05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
//     },
//     {
//       headlineFirstLine: "Nulla",
//       headlineSecondLine: "Auctor",
//       sublineFirstLine: "Il n'y a rien de neuf sous",
//       sublineSecondLine: "le soleil",
//       bgImg: "https://i.postimg.cc/Qx34VNXM/slide1.jpg",
//       rectImg: "https://i.postimg.cc/ryWZ8R2b/slide-rect1.jpg",
//     },
//     {
//       headlineFirstLine: "Nullam",
//       headlineSecondLine: "Ultricies",
//       sublineFirstLine: "Τίποτα καινούργιο κάτω από",
//       sublineSecondLine: "τον ήλιο",
//       bgImg: "https://i.postimg.cc/t4RBtrnQ/slide2.jpg",
//       rectImg: "https://i.postimg.cc/3JFLGMRF/slide-rect2.jpg",
//     },
//   ];

//   const updateSlide = (index) => {
//     setIsPreviousSlide(index < currentSlide);
//     setCurrentSlide(index);
//     setIsFirstLoad(false);
//   };

//   return (
//     <div
//       className={`wrapper ${isPreviousSlide ? "is-previous" : ""} ${
//         isFirstLoad ? "first-load" : ""
//       }`}
//     >
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`slide-wrapper ${index === currentSlide ? "active" : ""}`}
//           style={{
//             zIndex: slides.length - index,
//             backgroundImage: `url(${slide.bgImg})`,
//           }}
//         >
//           <div className="slide-inner">
//             <div className="slide-bg-text">
//               <p>{slide.headlineFirstLine}</p>
//               <p>{slide.headlineSecondLine}</p>
//             </div>
//             <div className="slide-rect-filter">
//               <div
//                 className="slide-rect"
//                 style={{ borderImageSource: `url(${slide.rectImg})` }}
//               ></div>
//             </div>
//             <div className="slide-content">
//               <h1 className="slide-content-text">
//                 <p>{slide.headlineFirstLine}</p>
//                 <p>{slide.headlineSecondLine}</p>
//               </h1>
//               <a className="slide-content-cta">Call To Action</a>
//             </div>
//             <h2 className="slide-side-text">
//               <span>{slide.sublineFirstLine} / </span>
//               <span>{slide.sublineSecondLine}</span>
//             </h2>
//           </div>
//         </div>
//       ))}

//       <div className="controls-container">
//         {slides.map((slide, index) => (
//           <button
//             key={index}
//             className={`controls-button ${
//               index === currentSlide ? "active" : ""
//             }`}
//             onClick={() => updateSlide(index)}
//           >
//             {slide.headlineFirstLine} {slide.headlineSecondLine}
//           </button>
//         ))}
//       </div>

//       <div className="pagination-container">
//         {slides.map((slide, index) => (
//           <span
//             key={index}
//             className={`pagination-item ${
//               index === currentSlide ? "active" : ""
//             }`}
//             onClick={() => updateSlide(index)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };
