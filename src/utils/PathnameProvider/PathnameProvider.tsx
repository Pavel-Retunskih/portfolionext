"use client";
import {createContext, useContext, useState, useEffect} from "react";
import {usePathname} from "next/navigation";

const PathnameContext = createContext<string>("");

export const PathnameProvider = ({children}: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return <PathnameContext.Provider value={currentPath}>{children}</PathnameContext.Provider>;
};

export const useCurrentPath = () => useContext(PathnameContext);
