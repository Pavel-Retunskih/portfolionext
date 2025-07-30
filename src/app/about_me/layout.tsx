import {ReactNode} from "react";
import {SnippetsList} from "@/widgets/SnipetsList/SnippetsList";


export const dynamic = "force-dynamic"
export default function AboutMeLayout({children}: { children: ReactNode }) {
  return <div className={'flex'}>
    <div>
      {children}
    </div>
    <div className={'pt-4'}>
      <span>{'// Code snippet showcase:'}</span>
      <SnippetsList/>
    </div>
  </div>
}