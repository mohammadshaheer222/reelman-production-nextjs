"use client"

import React from "react";

import { SliderElement } from "@/app/(build_elements)/_components";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

import demo from "../../../public/assets/images/DSC09082 copy(1).jpg"
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Background, Parallax } from "react-parallax";

export default function PageContent() {
  const heroImage = [{ image: "https://lioneltan.co.nz/wp-content/uploads/2020/04/orakei-bay-wedding-46.jpg" }, { image: "https://lioneltan.co.nz/wp-content/uploads/2020/04/orakei-bay-wedding-46.jpg" },]
  return (
    <>
      {/* Hero */}
      <SliderElement sliderImage={heroImage} isParallax={true} />
      {/* Middle slider */}
      {/* <SliderElement sliderImage={heroImage} /> */}
      {/* Wedding card */}
      <div className="flex justify-center items-center w-full p-5">
        <div className="grid  grid-cols-4 ipad:grid-cols-3 mob-lg:grid-cols-2 mob:grid-cols-1 h-full w-full gap-4 ">
          <div className="relative">
            <Link href={``}>
              <div className="overflow-hidden">
                <Image src={demo} alt="Wedding photo" quality={100} unoptimized={true} priority={true} className="object-cover object-center h-[400px] w-full hover:scale-105 transition-all duration-700" />
              </div>
              <p className="capitalize font-bold font-playfair leading-[19px] tracking-[0.9px] text-lg py-2 text-center">Wedding</p>
              <p className="font-playfair font-light leading-[19px] tracking-[0.9px] text-lg py-2 text-center">The big day</p>
            </Link>
          </div>
          <div className="relative">
            <Link href={``}>
              <div className="overflow-hidden">
                <Image src={demo} alt="Wedding photo" quality={100} unoptimized={true} priority={true} className="object-cover object-center h-[400px] w-full hover:scale-105 transition-all duration-700 mob-lg:h-[380px]" />
              </div>
              <p className="capitalize font-bold font-playfair leading-[19px] tracking-[0.9px] text-lg py-2 text-center">Films</p>
              <p className="font-playfair font-light leading-[19px] tracking-[0.9px] text-lg py-2 text-center">Creativity Show</p>
            </Link>
          </div>
          <div className="relative">
            <Link href={``}>
              <div className="overflow-hidden">
                <Image src={demo} alt="Wedding photo" quality={100} unoptimized={true} priority={true} className="object-cover object-center h-[400px] w-full hover:scale-105 transition-all duration-700 mob-lg:h-[380px]" />
              </div>
              <p className="capitalize font-bold font-playfair leading-[19px] tracking-[0.9px] text-lg py-2 text-center">Outdoors</p>
              <p className="font-playfair font-light leading-[19px] tracking-[0.9px] text-lg py-2 text-center">The big day</p>
            </Link>
          </div>
          <div className="relative">
            <Link href={``}>
              <div className="overflow-hidden">
                <Image src={demo} alt="Wedding photo" quality={100} unoptimized={true} priority={true} className="object-cover object-center h-[400px] w-full hover:scale-105 transition-all duration-700 mob-lg:h-[380px]" />
              </div>
              <p className="capitalize font-bold font-playfair leading-[19px] tracking-[0.9px] text-lg py-2 text-center">Modeling</p>
              <p className="font-playfair font-light leading-[19px] tracking-[0.9px] text-lg py-2 text-center">The big day</p>
            </Link>
          </div>
        </div>
      </div>
      {/* Wedding quote with Reels */}
      <div>
        <Link href={``}>
          <div className="relative">
            <Parallax className="min-h-[90vh] max-h-[90vh] object-cover object-center" strength={200}>
              <Background className="custom-bg w-screen">
                <Image src={demo} alt="Wedding photo" quality={100} unoptimized={true} priority={true} className="h-[100vh] w-full object-cover object-center" />
              </Background>
            </Parallax>
            <div className="absolute top-0 w-full h-full flex justify-center items-end mix-blend-difference">
              <Marquee speed={30} className="overflow-hidden">
                <h1 className="text-8xl font-bold text-white font-playfair tracking-[0.9px]">The Big Day</h1>
              </Marquee>
            </div>
          </div>
        </Link>
        <Link href={``}>
          <div className="relative">
            <Parallax className="min-h-[90vh] max-h-[90vh] object-cover object-center" strength={200}>
              <Background className="custom-bg w-screen">
                <Image src={demo} alt="Wedding photo" quality={100} unoptimized={true} priority={true} className="h-[100vh] w-full object-cover object-center" />
              </Background>
            </Parallax>
            <div className="absolute top-0 w-full h-full flex justify-center items-end mix-blend-difference">
              <Marquee speed={30} pauseOnHover={true} autoFill={true} className="overflow-hidden">
                <h1 className="text-8xl font-bold text-white font-playfair tracking-[0.9px]">The Big Day</h1>
              </Marquee>
            </div>
          </div>
        </Link>
      </div>
      {/* Instagram */}
      <div className="flex justify-center items-center p-5">
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