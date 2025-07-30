import {Fira_Code} from "next/font/google";
import "./globals.css";
import {Header} from "@/widgets/Header/Header";
import {Footer} from "@/widgets/Footer/Footer";
import {ReactNode} from "react";
import {Analytics} from "@vercel/analytics/react";
import {MobileMenu} from "@/widgets/MobileMenu/MobileMenu";
import {Sidebar} from "@/widgets/Sidebar/Sidebar";
import {PathnameProvider} from "@/utils/PathnameProvider/PathnameProvider";
import {SpeedInsights} from "@vercel/speed-insights/next"

const firaCode = Fira_Code({
  variable: "--firaCode",
  subsets: ["latin"],
});

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {

  return (
      <html lang="en">
      <body
          className={`${firaCode.variable} bg-background flex flex-col items-center h-screen`}
      >
      <Analytics/>
      <SpeedInsights/>
      <div
          className="flex flex-col h-full w-full max-w-[1782px] md:m-3 px-5 border border-lines bg-primary-blue rounded">
        {/* Header */}
        <PathnameProvider>
          <Header/>
          {/* Mobile Menu */}
          <MobileMenu/>
          {/* Main content */}
          <main className="flex-1 flex overflow-visible">
            <Sidebar/>
            {children}
          </main>
          {/* Footer */}
          <Footer/>
        </PathnameProvider>
      </div>
      </body>
      </html>
  );
}
