import { Noto_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["300", "400", "500", "600"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Hexa Lam | Architectural Laminates",
  description:
    "Premium acrylic laminate surfaces engineered for modern architecture.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${robotoMono.variable}`}>
       <Navbar/>
        {children}
      </body>
    </html>
  );
}