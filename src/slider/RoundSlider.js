import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RoundSlider.css";
function RoundSlider() {
  const items = [
    {
      id: 2,

      image: "images/one.png",
    },
    {
      id: 3,

      image: "images/two.png",
    },
    {
      id: 4,

      image: "images/three.png",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: "100px",
  };

  return (
    <div class="slider-body">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id}>
            <img class="slider-img" src={item.image} alt={item.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RoundSlider;
