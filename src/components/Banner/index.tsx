"use client";

import { useViewportHeight } from '@/hooks/useViewportHeight';
import { NohemiSemiBold } from '@/lib/fonts';
import { cn } from '@/lib/utils';

const Banner = () => {

    const height = useViewportHeight();

  return (
    <div style={{ height: height ? height * 2 : "100svh"}} className='w-full bg-red-500 relative pt-10'>
      
        <div className='absolute z-50 top-0 left-0 w-screen h-10 md:px-4 px-2'>
            <div className='w-full h-full border-b border-white flex items-center justify-between md:text-base text-sm'>
                <p className={cn("", NohemiSemiBold.className)}>WHAT I BRING</p>
            </div>
        </div>

    </div>
  )
}

export default Banner;
