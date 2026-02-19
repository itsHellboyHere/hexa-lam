import { Noto_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrolltoTop";

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
  metadataBase: new URL("https://hexalam.com"),

  title: {
    default: "HexaLam | Premium Laminates",
    template: "%s | Hexa Lam",
  },

  description:
    "Hexa Lam manufactures premium acrylic laminate surfaces engineered for modern architecture, interiors, and commercial spaces.",

  keywords: [
    "Acrylic Laminates",
    "High Gloss Laminates",
    "Interior Surfaces",
    "Decorative Laminates India",
    "Premium Laminate Sheets",
  ],

  authors: [{ name: "Hexa Lam" }],
  creator: "Hexa Lam",
  publisher: "Hexa Lam",

  openGraph: {
    title: "Hexa Lam | Premium Laminates",
    description:
      "Premium acrylic laminate surfaces engineered for modern architecture and interiors.",
    url: "https://hexalam.com",
    siteName: "Hexa Lam",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hexa Lam | Premium Laminates",
    description:
      "Premium acrylic laminate surfaces engineered for modern architecture.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${robotoMono.variable}`}>
        <Navbar />
        <ScrollToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}