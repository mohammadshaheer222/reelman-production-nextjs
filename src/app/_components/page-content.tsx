"use client"

import React from "react";

import { SliderElement } from "../(build_elements)/_components/index";

export default function PageContent() {
  const heroImage = [{image: "https://lioneltan.co.nz/wp-content/uploads/2020/04/orakei-bay-wedding-46.jpg"},{image: "https://lioneltan.co.nz/wp-content/uploads/2020/04/orakei-bay-wedding-46.jpg"}, ]
    return (
      <>
        <SliderElement sliderImage={heroImage} isParallax={true} />
        {/* <SliderElement sliderImage={heroImage}  /> */}
        <div className="h-screen"></div>
      </>
    )
}