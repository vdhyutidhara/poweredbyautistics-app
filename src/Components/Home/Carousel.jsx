import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const carouselStyle = {
  height: "250px",
  width: "100%",
  backgroundColor: "skyblue",
};

const items = [
  <div className="item" style={carouselStyle} data-value="1">
    1
  </div>,
  <div className="item" data-value="2">
    2
  </div>,
  <div className="item" style={carouselStyle} data-value="3">
    3
  </div>,
  <div className="item" data-value="4">
    4
  </div>,
  <div className="item" style={carouselStyle} data-value="5">
    5
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
