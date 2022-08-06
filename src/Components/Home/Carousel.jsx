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
      src="https://images.pexels.com/photos/8709411/pexels-photo-8709411.jpeg"
      alt="img1"
      width="100%"
      height="300px"
    />
  </div>,
  <div className="item" data-value="2">
    <img
      src="https://images.pexels.com/photos/8709354/pexels-photo-8709354.jpeg"
      alt="img2"
      width="100%"
      height="300px"
    />
  </div>,
  <div className="item" data-value="3">
    <img
      src="https://images.pexels.com/photos/8709285/pexels-photo-8709285.jpeg"
      alt="img3"
      width="100%"
      height="300px"
    />
  </div>,
  <div className="item" data-value="4">
    <img
      src="https://images.pexels.com/photos/8709219/pexels-photo-8709219.jpeg"
      alt="img4"
      width="100%"
      height="300px"
    />
  </div>,
  <div className="item" data-value="5">
    <img
      src="https://images.pexels.com/photos/8709181/pexels-photo-8709181.jpeg"
      alt="img5"
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
    autoPlayInterval={1000}
    animationDuration={1000}
    animationType="fadeout"
    infinite
    touchTracking={false}
    disableDotsControls
    disableButtonsControls
    items={items}
  />
);

export default Carousel;
