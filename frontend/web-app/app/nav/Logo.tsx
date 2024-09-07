'use client'
import { useParamsStore } from '@/hooks/useParamsStore';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { AiOutlineCar } from 'react-icons/ai'

export default function Logo() {
  const router = useRouter();
  const pathname = usePathname();
  function doReset(){
    if (pathname !== '/') router.push('/');
    reset();
  }
  const reset = useParamsStore(state => state.reset);

  return (
    <div onClick={doReset} className="flex items-center text-3xl cursor-pointer gap-2 font-semibold text-red-500">
        <AiOutlineCar size={34}/>
        <div className='flex text-sm sm:text-base md:text-2xl lg:text-2xl xl:text-3xl'>Carsties Auctions</div>
      </div>
  )
}
