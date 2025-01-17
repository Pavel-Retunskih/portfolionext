'use client'
import { Fira_Code } from "next/font/google";
import "./globals.css";
import {Header} from "@/widgets/Header/Header";
import {Footer} from "@/widgets/Footer/Footer";
import {ReactNode} from "react";


const firaCode = Fira_Code({
  variable: "--firaCode",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} w-full h-full bg-background mx-auto`}
      >
      <div className={'flex items-center justify-center'}>
        <div className={'max-w-[1782px] w-full m-[70px]  border-2 border-lines bg-primary-blue rounded-s px-5'}>
          <Header/>
          {children}
          <Footer/>
        </div>
      </div>

      </body>
    </html>
  );
}
