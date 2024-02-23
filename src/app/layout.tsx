import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black text-slate-100">
      <body className={poppins.className}>
        <Header/>
        {children}
        <div className="absolute inset-0 -z-50 max-h-screen background-gradient"></div>
        <Footer/>
      </body>
    </html>
  );
}
