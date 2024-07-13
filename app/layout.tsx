import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-w-screen min-h-screen flex flex-col justify-between overflow-x-hidden overflow-y-auto relative">
          {children}
          <Footer />
          <div className="w-full h-full bg-[url('/images/textures.png')] bg-contain bg-repeat absolute left-0 top-0 z-10" />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

export const metadata: Metadata = {
  title: "Trigger",
  description: "Marketing automation for the modern web",
};
