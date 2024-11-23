"use client";

import React, { useState } from "react";

import Link from "next/link";
import { MdMenu, MdClose, MdHome } from "react-icons/md";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-screen w-full font-playfair">
      <div className={`${isOpen ? "w-80 mob-land:translate-x-0" : "w-20 mob-land:-translate-x-full mob-land:w-0 mob-land:p-0"}transition-transform duration-300 
          ease-in-out bg-white h-screen p-5 space-y-6 py-[50px] flex flex-col gap-4 mob-land:fixed z-30`}>
        <h2 style={{ transitionDelay: isOpen ? "200ms" : "0ms" }} className={`text-2xl font-bold duration-100 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } mob-land:hidden`}>Reelman Production</h2>
        <nav className="flex flex-col gap-4">
          <Link href={"/admin/"} className="flex items-center gap-2 hover:bg-white hover:text-black-shade-900 p-2 rounded-md"><MdHome /><span className={`${isOpen ? "block" : "hidden"}`}>Hero Slider</span></Link>
          <Link href={"/admin/wedding-slider"} className="flex items-center gap-2 hover:bg-white hover:text-black-shade-900 p-2 rounded-md"><MdHome /><span className={`${isOpen ? "block" : "hidden"}`}>Wedding Slider</span></Link>
          <Link href={"/admin/instagram"} className="flex items-center gap-2 hover:bg-white hover:text-black-shade-900 p-2 rounded-md"><MdHome /><span className={`${isOpen ? "block" : "hidden"}`}>Instagram</span></Link>
          <Link href={""} className="flex items-center gap-2 hover:bg-white hover:text-black-shade-900 p-2 rounded-md"><MdHome /><span className={`${isOpen ? "block" : "hidden"}`}>Hero</span></Link>
        </nav>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between bg-black-shade-900 text-white p-4 shadow">
          <button className=" p-2 text-gray-600 hover:text-gray-800 mob-land:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <MdClose className="text-white" /> : <MdMenu className="text-white" />}</button>
          <h3>Admin Panel</h3>
          <button className=" p-2 text-gray-600 hover:text-gray-800 hidden mob-land:block" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <MdClose /> : <MdMenu />}</button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
