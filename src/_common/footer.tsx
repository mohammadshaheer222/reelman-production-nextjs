"use client";

import Link from "next/link";
import React from "react";

import { FaInstagram, FaTwitter,FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="w-full bg-theme-color flex flex-col gap-14 justify-center items-center py-5">
            <div className="flex flex-col justify-center items-center w-full gap-2">
                <FaInstagram size={20} className="text-center" />
                <Link className="font-playfair font-thin leading-[19px] tracking-[0.9px] text-black" href={"https://www.instagram.com/reelmanproduction/"}>@reelmanproductions</Link>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-center items-center gap-4">
                    <FaFacebook  size={15} className="text-center text-gray-800" />
                    <FaInstagram size={15} className="text-center text-gray-800" />
                    <FaTwitter  size={15} className="text-center text-gray-800" />
                    <FaYoutube  size={15} className="text-center text-gray-800" />
                    <FaFacebook  size={15} className="text-center text-gray-800" />
                </div>
                <div className="flex gap-4 mob-land:flex-col justify-center items-center">
                    <Link className="font-playfair font-thin leading-[19px] tracking-[0.9px] text-black uppercase text-sm" href={"/"}>Home</Link>
                    <Link className="font-playfair font-thin leading-[19px] tracking-[0.9px] text-black uppercase text-sm" href={"/about"}>About</Link>
                    <Link className="font-playfair font-thin leading-[19px] tracking-[0.9px] text-black uppercase text-sm" href={"/works"}>Our Works</Link>
                    <Link className="font-playfair font-thin leading-[19px] tracking-[0.9px] text-black uppercase text-sm" href={"/wedding-category"}>Wedding Category</Link>
                    <Link className="font-playfair font-thin leading-[19px] tracking-[0.9px] text-black uppercase text-sm" href={"/contact"}>Contact</Link>
                </div>
                <p className="font-playfair font-thin leading-[19px] tracking-[0.9px] text-gray-400 text-xs text-center">All content Copyright © 2024 Reelman Production</p>
            </div>
        </div>
    )
}