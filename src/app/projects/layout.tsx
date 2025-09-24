import {ReactNode} from "react";


export default function ProjectsLayout({children}: { children: ReactNode }) {
  return <div className={'flex w-full flex-grow'}>
    {children}
  </div>
}