"use client"

import React from "react";

import { SliderElement } from "@/app/(build_elements)/_components";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

import demo from "../../../public/assets/images/DSC09082 copy(1).jpg"
import Link from "next/link";
import WeddingCard from "../(build_elements)/_components/User/wedding-card";
import WeddingReel from "../(build_elements)/_components/User/wedding-reel";

export default function PageContent() {
  const heroImage = [{ image: demo }, { image: demo },]
  const weddingCategory = [
    { cardImage: demo, cardTitle: "Wedding", cardQuote: "The Big Day" },
    { cardImage: demo, cardTitle: "Films", cardQuote: "The Big Day" },
    { cardImage: demo, cardTitle: "Outdoor", cardQuote: "The Big Day" },
    { cardImage: demo, cardTitle: "Modeling", cardQuote: "The Big Day" },
  ]
  const weddingReel = [
    { cardImage: demo, cardTitle: "The Big Day" },
    { cardImage: demo, cardTitle: "The Big Day" },
  ]
  const instagram = [
    { cardImage: demo, link: "https://www.instagram.com/p/CWV-dYWPGnW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { cardImage: demo, link: "https://www.instagram.com/p/CWV-dYWPGnW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  ]
  return (
    <>
      <SliderElement sliderImage={heroImage} isParallax={true} wrapperClass="pb-9" />
      {/* <SliderElement sliderImage={heroImage} /> */}
      <WeddingCard weddingCategory={weddingCategory} wrapperClass="py-5" />
      <WeddingReel weddingReel={weddingReel} wrapperClass="p-5" />
      <div className="flex justify-center items-center py-5">
        <button className="bg-transparent text-black border border-gray-700 font-playfair leading-[19px] tracking-[0.9px] px-8 py-4 hover:bg-black hover:text-white rounded-sm">Book Your Wedding</button>
      </div>
      <div className="flex flex-col justify-start items-start p-5">
      <h1 className="text-4xl font-playfair font-bold leading-[19px] tracking-[0.9px] pb-4 uppercase text-start flex-nowrap text-black mob:text-2xl">Instagram</h1>
        <div className="grid grid-cols-4 ipad:grid-cols-3 mob-lg:grid-cols-2 h-full w-full gap-4">
          {instagram && instagram.map((data, index: number) => (
            <div key={index} className="cursor-pointer group overlay top-0 left-0 w-full h-full transition-opacity duration-500 hover:opacity-50">
              <div className="w-full relative">
                <Image className="w-full h-[400px] mob:h-[200px] object-cover object-center" quality={100} unoptimized={true} priority={true} src={data.cardImage} alt="Instagram-image" />
                <div className="scale-0 group-hover:scale-100 duration-500 absolute top-0 flex justify-center items-center h-full w-full">
                  <Link href={data.link}><FaInstagram size={20} className=" scale-125 hover:rotate-90 transition-all duration-500" /> </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}