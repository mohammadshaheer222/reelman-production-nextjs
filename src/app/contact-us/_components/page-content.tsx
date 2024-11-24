"use client"

import React, { useState } from "react";
import { Background, Parallax } from "react-parallax";
import demo from "../../../../public/assets/images/DSC09082 copy(1).jpg"
import Image from "next/image";
import { TextInputBox, CheckBox } from "@/_components/form_elements";

export default function PageContent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
        location: "",
        photography: 0,
        videography: 0,
        both: 0,
    })
    return (
        <div>
            <Parallax strength={200} className="min-h-[100vh] h-auto w-full" >
                <Background className="custom-bg w-screen h-screen">
                    <Image quality={100} unoptimized={true} priority={true} src={demo} alt="Contact image" className="object-cover object-center w-full h-full" />
                </Background>
            </Parallax>
            <div className="h-full w-full flex flex-col justify-start items-start gap-10 p-5">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-playfair font-bold leading-[19px] tracking-[0.9px] uppercase text-black mob:text-2xl">Let&apos;s Start Your Journey
                    </h1>
                    <p className="font-playfair text-sm leading-[19px] tracking-[0.9px] text-black">If you have any questions or enquiries about date availability, please fill in the box below with some details and Pepper Green will get back to you. Be sure to check your spam folder in case the email decides to take a detour!</p>
                    <div className="font-playfair text-sm leading-[19px] tracking-[0.9px] text-black">
                        <p>Email: reelmanproduction@gmail.com</p>
                        <p>Contact: +91 9895943440</p>
                    </div>
                </div>
                <form className="space-y-5 text-sm w-full">
                    <h1 className="text-4xl font-playfair font-bold leading-[19px] tracking-[0.9px] uppercase text-black mob:text-2xl">Book Now</h1>
                    <div className="flex flex-col gap-y-5">
                        <TextInputBox type="text" placeholder="Enter your name" value={formData.name} onChangeValueText={(value: string) => setFormData({ ...formData, name: value })} />
                        <TextInputBox type="text" placeholder="Enter your email" value={formData.email} onChangeValueText={(value: string) => setFormData({ ...formData, email: value })} />
                        <TextInputBox type="text" placeholder="Enter your phone number" value={formData.number} onChangeValueText={(value: string) => setFormData({ ...formData, number: value })} />
                        <TextInputBox type="text" placeholder="Enter your email" value={formData.email} onChangeValueText={(value: string) => setFormData({ ...formData, email: value })} />
                        {/* <textarea
                                className=" px-2 py-2 resize-none outline-none w-full"
                                id="message"
                                name="message"
                                rows="6"
                                cols="50"
                                placeholder=" Tell us more about your wedding - event flow, venues."
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                required
                            /> */}
                        <TextInputBox type="text" placeholder="Location of your wedding" value={formData.location} onChangeValueText={(value: string) => setFormData({ ...formData, location: value })} />
                        <div className="flex justify-start items-center gap-5 mob-lg:flex-col mob-lg:justify-start mob-lg:items-start">
                            <CheckBox value={formData.photography} onTriggerCheck={(value: number) => setFormData({ ...formData, photography: value ? 1 : 0 })} label={<p className="font-playfair font-thin text-base text-black leading-[19px] tracking-[0.9px]">Photography</p>} />
                            <CheckBox value={formData.videography} onTriggerCheck={(value: number) => setFormData({ ...formData, videography: value ? 1 : 0 })} label={<p className="font-playfair font-thin text-base text-black leading-[19px] tracking-[0.9px]">Videography</p>} />
                            <CheckBox value={formData.both} onTriggerCheck={(value: number) => setFormData({ ...formData, both: value ? 1 : 0 })} label={<p className="font-playfair font-thin text-base leading-[19px] text-black tracking-[0.9px]">Both</p>} />
                        </div>
                    </div>
                    <button type="submit" className="border border-gray-400 text-black px-10 py-2 cursor-pointer hover:bg-black hover:text-white">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}