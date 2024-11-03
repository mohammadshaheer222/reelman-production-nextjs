import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Parallax } from "react-parallax";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SliderElement = ({ sliderImage }: { sliderImage: string }) => {
  const infinite = Array.isArray(sliderImage) && sliderImage.length > 1;

  const settings = {
    dots: infinite,
    infinite: infinite,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Slider {...settings}>
      <Parallax
        strength={200}
        bgImageStyle={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <LazyLoadImage
          src={sliderImage ? sliderImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCS1UA3pZIonRuREw2OLe4fXDUlTwPazCCGpk8W3zHM5OmH7FYx0C2ohARdFSzVN5TUg&usqp=CAU"}
          alt="Slider background"
          effect="blur"
          style={{
            width: "100vw",
            height: "95vh",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        {/* <div
          style={{
            height: "95vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div> */}
      </Parallax>
    </Slider>
  );
};

export default SliderElement;
