import {Fira_Code} from "next/font/google";
import "./globals.css";
import {Header} from "@/widgets/Header/Header";
import {Footer} from "@/widgets/Footer/Footer";
import {ReactNode} from "react";
import {Analytics} from "@vercel/analytics/react"
import {MobileMenu} from "@/widgets/MobileMenu/MobileMenu";


const firaCode = Fira_Code({
  variable: "--firaCode",
  subsets: ["latin"],
});

export default function RootLayout({children}: Readonly<{
  children: ReactNode;
}>) {
  console.log('Root layout render');
  return (
      <html lang="en">
      <body
          className={`${firaCode.variable} w-full h-full bg-background mx-auto`}
      >
      <Analytics/>
      <div className={'flex items-center justify-center'}>
        <div className={'m-2 max-w-[1782px] w-full md:m-3 px-5  border border-lines bg-primary-blue' +
            ' rounded'}>
          <Header/>
          <MobileMenu/>
          {children}
          <Footer/>
        </div>
      </div>

      </body>
      </html>
  );
}
