"use client";

import React from "react";

import { MdFacebook } from "react-icons/md";

export default function Footer() {
    return (
        <div className="w-full h-[50vh] bg-theme-color flex flex-col gap-4 justify-center items-center">
            <div className="flex gap-2 items-center">
                <MdFacebook />
                <MdFacebook />
                <MdFacebook />
            </div>
        </div>
    )
}