import {ReactNode} from "react";
import {SnippetsList} from "@/widgets/SnipetsList/SnippetsList";
import {Sidebar} from "@/widgets/Sidebar/Sidebar";


export const dynamic = "force-dynamic"
export default function AboutMeLayout({children}: { children: ReactNode }) {
  return <div className='flex w-full flex-col mt-14 md:flex-row'>
    <Sidebar/>
    {children}
    <div className='h-[calc(100vh-130px)] overflow-hidden'>
      <SnippetsList/>
    </div>
  </div>
}