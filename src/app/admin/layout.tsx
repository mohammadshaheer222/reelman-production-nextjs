import { Playfair } from "next/font/google";
import "../globals.css";
import Footer from "@/_common/footer";

const playfair = Playfair({
  subsets: ["latin"], //Latin: Includes basic characters used in English (A-Z, a-z, 0-9).
  display: "swap", // Use 'swap' to ensure text is visible during font loading
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${playfair.variable} antialiased bg-theme-color dark:bg-black-shade-900`}>
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
