import { Metadata } from "next";

import { Suspense } from "react";

import { metadata as layoutMetaData } from "@/app/layout";
import PageContent from "./_components/page-content";
// import Footer from "@/_common/footer";

export const metadata: Metadata = {
  title:"Reelman Productions | Wedding Photography, Modeling, and Professional Photoshoots",
  description:"Reelman Productions is your premier choice for wedding photography, modeling sessions, and professional photoshoots. We specialize in capturing stunning visuals and timeless moments for couples and models alike. Our experienced team uses creative techniques to ensure your memories are beautifully preserved. Contact us today to book your session!",
  alternates: {
    canonical: "https://www.reelmanproductions.com/",
  },
  openGraph: {
    ...layoutMetaData.openGraph,
    url: "https://www.reelmanproductions.com/",
  },
};

export default function HomePage() {
  return <Suspense><PageContent /></Suspense>;
}
