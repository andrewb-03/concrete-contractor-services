import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Concrete Contractor Services | San Jose, CA | Vazquez Millan Concrete",
    template: "%s | Vazquez Millan Concrete",
  },
  description:
    "From driveways to retaining walls & foundations, Vazquez Millan Concrete offers affordable concrete services to the South Bay area. CA License #1047443.",
  keywords:
    "concrete contractor San Jose, driveways, patios, foundations, asphalt, South Bay concrete",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${inter.variable} font-body bg-concrete-black text-concrete-offwhite antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
