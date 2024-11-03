import type { Metadata } from "next";

import { Playfair } from "next/font/google"
import "./globals.css";

const playfair = Playfair({
  subsets: ['latin'], //Latin: Includes basic characters used in English (A-Z, a-z, 0-9).
  display: 'swap', // Use 'swap' to ensure text is visible during font loading
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Reelman Productions | Wedding Photography, Modeling, and Professional Photoshoots",
  description: "Reelman Productions is your premier choice for wedding photography, modeling sessions, and professional photoshoots. We specialize in capturing stunning visuals and timeless moments for couples and models alike. Our experienced team uses creative techniques to ensure your memories are beautifully preserved. Contact us today to book your session!",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} antialiased bg-theme-color dark:bg-black-shade-900`}>
        {children}
      </body>
    </html>
  );
}
