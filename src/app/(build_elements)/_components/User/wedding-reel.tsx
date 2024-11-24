import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { Background, Parallax } from "react-parallax";

type WeddingReelProps = {
    cardImage: string | StaticImageData;
    cardTitle: string;
};

const WeddingReel = ({ weddingReel, wrapperClass = `` }: { weddingReel: WeddingReelProps[], wrapperClass?: string | undefined }) => {
    return (
        <div className={`${wrapperClass}`}>
            <h1 className="text-4xl font-playfair font-bold leading-[19px] tracking-[0.9px] pb-4 uppercase text-start flex-nowrap mob:text-2xl">Wedding Stories</h1>
            {weddingReel && weddingReel.map((data, index: number) => (
                <Link href={``} key={index}>
                    <div className="relative">
                        <Parallax className="min-h-[90vh] max-h-[90vh] object-cover object-center" strength={200}>
                            <Background className="custom-bg w-screen">
                                <Image src={data.cardImage} alt="Wedding photo" quality={100} unoptimized={true} priority={true} className="h-[100vh] w-full object-cover object-center" />
                            </Background>
                        </Parallax>
                        <div className="absolute top-0 w-full h-full flex justify-center items-end mix-blend-difference">
                            <Marquee speed={30} className="overflow-hidden">
                                <h1 className="text-8xl font-bold text-white font-playfair tracking-[0.9px]">{data.cardTitle}</h1>
                            </Marquee>
                        </div>
                    </div>
                </Link>
            ))}
            
        </div>
    )
};

export default WeddingReel;
