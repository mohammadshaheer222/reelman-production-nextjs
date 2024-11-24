import React from "react";

import Image from "next/image";
import { RxAvatar } from "react-icons/rx";

export default function TextInputBox({
    type = "text",
    onChangeValueText,
    onChangeValue,
    placeholder,
    imageState,
    value,
    name = ``,
    id = ``,
    altText = ``,
    wrapperClass = ``,
    labelClass = ``,
    inputClass = ``,
    error = ``,
    errorWrapperClass = ``,
    // errorTextClass = ``,
    errorElementId = ``,
}: {
    type: string;
    placeholder?: string | undefined;
    onChangeValueText?: (value: string) => void;
    onChangeValue?: (value: File | undefined) => void;
    value?: string | undefined;
    name?: string | undefined;
    id?: string | undefined;
    imageState?: File | null;
    altText?: string | undefined;
    wrapperClass?: string | undefined;
    labelClass?: string | undefined;
    inputClass?: string | undefined;
    error?: string | undefined;
    errorWrapperClass?: string | undefined;
    // errorTextClass?: string | undefined;
    errorElementId?: string | undefined;
}) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (type === "text" && onChangeValueText) {
            onChangeValueText(e.target.value);
        } else if (type === "file" && onChangeValue) {
            const file = e.target.files?.[0];
            onChangeValue(file);
        }
    };
    return (
        type === "text" ? (
            <div>
                <div className={`${wrapperClass} flex-1 mob-land:flex-none w-full mob-land:w-full}`}>
                    <input
                        className={`${inputClass} bg-white px-5 py-4 w-full rounded-2xl placeholder:text-gray-400 focus:border-black tracking-contents ${error !== "undefined" && error !== "" ? 'border-[2px] border-solid border-red-500' : ''}`}
                        placeholder={placeholder}
                        type={type}
                        value={value}
                        onChange={handleInputChange}
                    />
                    {error !== '' && (
                        <div className={`pt-1 text-base text-validation-error tracking-contents ${errorWrapperClass}`} id={errorElementId}>{error}</div>
                    )}
                </div>
            </div>
        ) : (
            <>
                <div className={`${wrapperClass} flex flex-col justify-center w-full h-full items-center`}>
                    <label htmlFor={id} className={`${labelClass} flex flex-col justify-center h-full items-center`}>
                        <div className="py-6">
                            <p className="bg-black-shade-900 w-full text-white px-5 py-4 cursor-pointer active:scale-95 active:shadow-lg duration-100 rounded-2xl">
                                Browse Your Photos
                            </p>
                            <input className={`${inputClass} sr-only`} type={type} name={name} id={id} accept="image/*" onChange={handleInputChange} />
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
            </>
        )

    )
}