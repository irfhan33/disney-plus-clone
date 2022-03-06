import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

export default function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Warp src="images/slider-badging.jpg" />
      <Warp src="images/slider-badag.jpg" />
      <Warp src="images/Wind_Breaker_Banner.png" />
      <Warp src="images/slider-scale.jpg" />
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  padding-top: 20px;
  ul li button {
    &:before {
      font-size: 16px;
      color: rgba(150, 158, 171);
    }

    &:hover:before {
      //   color: red;
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Warp = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 4px solid transparent;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition-duration: 300ms;
  cursor: pointer;
  max-height: 368px;
  // object-fit: cover;

  &:hover {
    border: 4px solid rgba(249, 249, 249, 0.8);
  }
`;
