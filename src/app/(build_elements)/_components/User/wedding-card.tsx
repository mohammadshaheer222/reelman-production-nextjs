import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type WeddingCategoryProps = {
      cardImage: string | StaticImageData;
      cardTitle: string;
      cardQuote: string;
  };

const WeddingCard = ({ weddingCategory, wrapperClass=`` }: { weddingCategory: WeddingCategoryProps[], wrapperClass?: string | undefined }) => {
    return (
        <div className={`${wrapperClass} flex flex-col justify-start items-start w-full p-5`}>
            <h1 className="text-4xl font-playfair font-bold leading-[19px] tracking-[0.9px] pb-4 uppercase text-black mob:text-2xl">Our Works</h1>
            <div className="grid grid-cols-4 ipad:grid-cols-3 mob-lg:grid-cols-2 mob:grid-cols-1 h-full w-full gap-4 ">
                {weddingCategory && weddingCategory.map((data: WeddingCategoryProps, index: number) => (
                    <div key={index} className="relative">
                        <Link href={``}>
                            <div className="overflow-hidden">
                                <Image src={data.cardImage} alt="Wedding photo" quality={100} unoptimized={true} priority={true} className="object-cover object-center h-[400px] w-full hover:scale-105 transition-all duration-700" />
                            </div>
                            <p className="capitalize font-bold font-playfair leading-[19px] tracking-[0.9px] text-lg py-2 text-center text-black">{data.cardTitle}</p>
                            <p className="font-playfair font-light leading-[19px] tracking-[0.9px] text-lg py-2 text-center text-black">{data.cardQuote}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default WeddingCard;
