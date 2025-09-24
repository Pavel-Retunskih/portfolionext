import {Fira_Code} from "next/font/google";
import "./globals.css";
import {Header} from "@/widgets/Header/Header";
import {Footer} from "@/widgets/Footer/Footer";
import {ReactNode} from "react";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/next"
import {ClientProvider} from "@/widgets/ClientProvider/ClientProvider";
import {Metadata} from "next";

const firaCode = Fira_Code({
  variable: "--firaCode",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: 'Pavel Retunskih - Frontend Developer Portfolio',
  description: 'Portfolio of Pavel Retunskih, Frontend Developer specializing in React, Next.js, and TypeScript',
  keywords: 'frontend developer, react, nextjs, typescript, portfolio',
  authors: [{name: 'Pavel Retunskih'}],
  openGraph: {
    title: 'Pavel Retunskih - Frontend Developer',
    description: 'Portfolio showcase with projects and skills',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {

  return (
      <html lang="en">
      <body
          className={`${firaCode.variable} bg-background flex flex-col items-center`}
      >
      <Analytics/>
      <SpeedInsights/>
      <div
          className="w-full max-w-[1782px] border border-lines bg-primary-blue rounded m-0 md:my-4 flex flex-col justify-between min-h-screen md:min-h-[calc(100vh-2rem)]">
        <Header/>

        <ClientProvider>
          {children}
        </ClientProvider>

        <Footer/>
      </div>
      </body>
      </html>
  );
}
