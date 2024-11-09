"use client";

import { useState } from "react";
import imageCompression from "browser-image-compression";

export const useImageCompression = () => {
    const [compressedImage, setCompressedImage] = useState<File | null>(null);
    const compressImage = async (file: File) => {
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 800,
            useWebWorker: true,
        };
        try {
            const compressed = await imageCompression(file, options);
            setCompressedImage(compressed);
        } catch (error) {
            console.error(error);
        } 
    };
    return { compressedImage, compressImage };
};
