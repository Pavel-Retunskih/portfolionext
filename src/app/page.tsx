'use client'
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Home() {
  const router = useRouter();

  useEffect(()=>{
    router.push('/hello')
  },[router])
  return (
    <div className={'w-full h-full flex flex-col items-center justify-center'}>

    </div>
  );
}
