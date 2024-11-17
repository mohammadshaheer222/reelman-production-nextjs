"use client"

import React from "react";

import { SliderElement } from "@/app/(build_elements)/_components";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

import demo from "../../../public/assets/images/DSC09082 copy(1).jpg"
import Link from "next/link";

export default function PageContent() {
  const heroImage = [{ image: "https://lioneltan.co.nz/wp-content/uploads/2020/04/orakei-bay-wedding-46.jpg" }, { image: "https://lioneltan.co.nz/wp-content/uploads/2020/04/orakei-bay-wedding-46.jpg" },]
  return (
    <>
      <SliderElement sliderImage={heroImage} isParallax={true} />
      <SliderElement sliderImage={heroImage} />

      {/* Instagram */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 h-full w-full pt-2 gap-4 ipad:grid-cols-3 mob-lg:grid-cols-2">
          <div className="cursor-pointer group overlay top-0 left-0 w-full h-full transition-opacity duration-500 hover:opacity-50">
            <div className="w-full relative">
              <Image className="w-full" src={demo} alt="Instagram-image" width={328} height={455} />
              <div className="scale-0 group-hover:scale-100 duration-500 absolute top-0 flex justify-center items-center h-full w-full">
                <Link href={"https://www.instagram.com/p/CWV-dYWPGnW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}><FaInstagram size={20} className=" scale-125 hover:rotate-90 transition-all duration-500" /> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}