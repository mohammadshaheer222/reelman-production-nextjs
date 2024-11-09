import React, { useRef, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Parallax } from "react-parallax";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

type SliderImage = {
  image: string,
}

const SliderElement = ({ sliderImage, isParallax }: { sliderImage: SliderImage[], isParallax?: boolean | undefined }) => {
  const [imageLoader, setImageLoader] = useState(true);
  const infinite = sliderImage.length > 1;
  const sliderRef = useRef<HTMLDivElement | null>(null);
  // const [isSliderVisible, setIsSliderVisible] = useState(true);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsSliderVisible(true); 
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );
  //   if (sliderRef.current) {
  //     observer.observe(sliderRef.current);
  //   }
  //   return () => {
  //     if (sliderRef.current) {
  //       observer.unobserve(sliderRef.current);
  //     }
  //   };
  // }, []);

  const settings = {
    dots: infinite,
    infinite: infinite,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4,
  };

  return (

    <div ref={sliderRef}>
      <Slider {...settings}>
        {sliderImage.map((image: SliderImage, index) => (
          isParallax ? (
            <>
              {imageLoader && (
                <div style={{
                  width: "100vw",
                  height: "95vh",
                  backgroundColor: "gray",
                  animation: "pulse 1.5s infinite",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }} />
              )}
              <Parallax
                key={index}
                strength={200}
                bgImageStyle={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "100vh",
                }}
                bgImage={image.image ? image.image : ""}
                onLoad={() => setImageLoader(false)}
                style={{
                  height: "95vh",
                  width: "100vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
              </Parallax>
            </>
          ) : (
            <>
              {imageLoader && (
                <div style={{
                  width: "100vw",
                  height: "95vh",
                  backgroundColor: "gray",
                  animation: "pulse 1.5s infinite",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }} />
              )}
              <LazyLoadImage
                src={image.image ? image.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCS1UA3pZIonRuREw2OLe4fXDUlTwPazCCGpk8W3zHM5OmH7FYx0C2ohARdFSzVN5TUg&usqp=CAU"}
                alt="Slider background"
                effect="blur"
                onLoad={() => setImageLoader(false)}
                style={{
                  width: "100vw",
                  height: "95vh",
                  objectFit: "cover",
                  objectPosition: "center",
                  opacity: imageLoader ? 0 : 1,
                  transition: "opacity 0.5s ease-in-out",
                  position: "relative",
                  zIndex: 2,
                }}
              />
            </>
          )

        ))}
      </Slider>
    </div>
  )
};

export default SliderElement;
