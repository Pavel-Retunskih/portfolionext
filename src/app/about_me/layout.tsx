import {ReactNode} from "react";
import {Sidebar} from "@/widgets/Sidebar/Sidebar";

export default function AboutMeLayout({children}: { children: ReactNode }) {
  return <div className={'flex'}>
    <Sidebar/>
    {children}
    <div>Code snippet showcase:</div>
  </div>
}