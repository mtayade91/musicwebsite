import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music School(Pune)",
  description: "Music School is a premier institution dedicated to teaching the art and science of music. We nurture talent from the ground up, fostering a vibrant community of musicians.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
       <div className="relative w-full flex items-center justify-center">
       <Navbar/>
       </div>
        {children}
       <div className="w-full items-center justify-center">
        <Footer/>
      </div> 
      </body>
    </html>
  );
}
