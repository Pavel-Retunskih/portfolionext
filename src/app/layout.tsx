import {Fira_Code} from "next/font/google";
import "./globals.css";
import {Header} from "@/widgets/Header/Header";
import {Footer} from "@/widgets/Footer/Footer";
import {ReactNode} from "react";
import {Analytics} from "@vercel/analytics/react";
import {MobileMenu} from "@/widgets/MobileMenu/MobileMenu";
import {SpeedInsights} from "@vercel/speed-insights/next"

const firaCode = Fira_Code({
  variable: "--firaCode",
  subsets: ["latin"],
});

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {

  return (
      <html lang="en">
      <body
          className={`${firaCode.variable} bg-background flex flex-col items-center h-dvh `}
      >
      <Analytics/>
      <SpeedInsights/>
      <div
          className="w-full max-w-[1782px] border border-lines bg-primary-blue rounded m-0 md:my-4 h-full flex flex-col justify-between ">
        <Header/>
        <MobileMenu/>
        <main className="flex flex-grow align-middle justify-around">
          {children}
        </main>

        <Footer/>
      </div>
      </body>
      </html>
  );
}
