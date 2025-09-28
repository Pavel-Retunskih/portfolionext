'use client'
import {ReactNode, useEffect, useState} from "react";
import {MobileMenu} from "@/widgets/MobileMenu/MobileMenu";
import {usePathname} from "next/navigation";


type Props = {
  children: ReactNode,
};
export const ClientProvider = ({children}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [navigating, setNavigating] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (navigating) setNavigating(false);
  }, [pathname]);

  return (
      <>
        <MobileMenu open={open} setOpenAction={setOpen} setNavigatingAction={setNavigating}/>
        <main
            className={`${!open ? 'opacity-100' : 'opacity-0'} relative flex align-middle justify-around w-full flex-grow`}>
          {children}

          <div
              className={`absolute inset-0 transition-opacity duration-0 ${navigating ? 'opacity-100' +
                  ' pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              aria-hidden="true">
            <div className="absolute inset-0 bg-primary-blue/50 backdrop-blur-sm"/>
          </div>
        </main>
      </>
  );
};

