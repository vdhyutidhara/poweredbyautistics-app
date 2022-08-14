import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// const carouselStyle = {
//   height: "250px",
//   width: "100%",
//   backgroundColor: "skyblue",
// };

const items = [
  <div className="item" data-value="1">
    <img
      src="https://i.imgur.com/uHSqYS2.jpg"
      alt="img1"
      width="100%"
      height="300px"
    />
  </div>,
  <div className="item" data-value="2">
    <img
      src="https://i.imgur.com/HxzDPTH.jpg"
      alt="img2"
      width="100%"
      height="300px"
    />
  </div>,
  <div className="item" data-value="3">
    <img
      src="https://i.imgur.com/IIxPPVX.jpeg"
      alt="img3"
      width="100%"
      height="300px"
    />
  </div>,
];

const Carousel = () => (
  <AliceCarousel
    autoPlay
    autoPlayControls
    autoPlayStrategy="none"
    autoPlayInterval={2000}
    animationDuration={2000}
    animationType="fadeout"
    infinite
    touchTracking={false}
    disableDotsControls
    disableButtonsControls
    items={items}
  />
);

export default Carousel;
