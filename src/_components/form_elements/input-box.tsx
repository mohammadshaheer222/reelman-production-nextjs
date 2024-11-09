import React from "react";

import Image from "next/image";
import { RxAvatar } from "react-icons/rx";

export default function TextInputBox({
    type = "text",
    onChangeValue,
    imageState,
    name = ``,
    id = ``,
    altText = ``,
    wrapperClass = ``,
    labelClass = ``,
    inputClass = ``,
}: {
    type: string;
    onChangeValue: (value: File | undefined) => void;
    name?: string | undefined;
    id?: string | undefined;
    imageState?: File | null;
    altText?: string | undefined;
    wrapperClass?: string | undefined;
    labelClass?: string | undefined;
    inputClass?: string | undefined;
}) {
    return (
        <div className={`${wrapperClass} flex flex-col justify-center w-full h-full items-center`}>
            <label htmlFor={id} className={`${labelClass} flex flex-col justify-center h-full items-center`}>
                <div className="py-6">
                    <span className="bg-black-shade-900 w-full text-white px-4 py-2 cursor-pointer active:scale-95 active:shadow-lg duration-100">
                        Browse Your Photos
                    </span>
                    <input className={`${inputClass} sr-only`} type={type} name={name} id={id} accept="image/*" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeValue(e.target.files?.[0])} />
                </div>
            </label>
            <span className="inline-block overflow-hidden">
                {imageState ? (
                    <Image src={URL.createObjectURL(imageState)} alt={altText} width={150} height={200} />
                ) : (
                    <RxAvatar size={100} className="text-gray-300" />
                )}
            </span>
        </div>
    )
}