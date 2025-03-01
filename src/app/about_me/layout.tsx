import {ReactNode} from "react";


export const dynamic = "force-dynamic"
export default function AboutMeLayout({children}: { children: ReactNode }) {

  return <div className={'flex'}>
    {children}
    <div>Code snippet showcase:</div>
  </div>
}