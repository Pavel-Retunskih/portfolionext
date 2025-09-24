'use client'
import {ReactNode, useState} from "react";
import {MobileMenu} from "@/widgets/MobileMenu/MobileMenu";


type Props = {
  children: ReactNode,
};
export const ClientProvider = ({children}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
      <>
        <MobileMenu open={open} setOpenAction={setOpen}/>
        <main className="flex align-middle justify-around w-full flex-grow">
          {!open && children}
        </main>
      </>
  );
};