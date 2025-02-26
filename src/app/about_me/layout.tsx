import {ReactNode, Suspense} from "react";
import {Sidebar} from "@/widgets/Sidebar/Sidebar";

export const dynamic = "force-dynamic"
export default function AboutMeLayout({children}: { children: ReactNode }) {
  console.log('AboutMeLayout render');
  return <div className={'flex'}>
    <Suspense><Sidebar/></Suspense>
    {children}
    <div>Code snippet showcase:</div>
  </div>
}