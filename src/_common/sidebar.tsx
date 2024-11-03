"use client";

import React, { useState } from "react";

import Link from "next/link";
import { MdMenu, MdClose, MdHome } from "react-icons/md";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex h-screen w-full font-playfair">
      <div className={`${isOpen ? "w-64" : "w-20"} bg-black-shade-900 text-white h-screen p-5 space-y-6 mob-land:w-20 py-[50px] flex flex-col gap-4`}>
        <h2 className={`text-2xl font-bold ${isOpen ? "block" : " hidden"} mob-land:hidden`}>Reelman Production</h2>
        <nav className="flex flex-col gap-4">
          <Link href={""} className="flex items-center gap-2 hover:bg-white hover:text-black-shade-900 p-2 rounded-md"><MdHome /><span className={`${isOpen ? "block" : "hidden"} mob-land:hidden`}>Hero</span></Link>
          <Link href={""} className="flex items-center gap-2 hover:bg-white hover:text-black-shade-900 p-2 rounded-md"><MdHome /><span className={`${isOpen ? "block" : "hidden"} mob-land:hidden`}>Hero</span></Link>
          <Link href={""} className="flex items-center gap-2 hover:bg-white hover:text-black-shade-900 p-2 rounded-md"><MdHome /><span className={`${isOpen ? "block" : "hidden"} mob-land:hidden`}>Hero</span></Link>
          <Link href={""} className="flex items-center gap-2 hover:bg-white hover:text-black-shade-900 p-2 rounded-md"><MdHome /><span className={`${isOpen ? "block" : "hidden"} mob-land:hidden`}>Hero</span></Link>
        </nav>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between bg-white p-4 shadow">
          <button className=" p-2 text-gray-600 hover:text-gray-800" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <MdMenu /> : <MdClose />}</button>
          <h3>Admin Panel</h3>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
