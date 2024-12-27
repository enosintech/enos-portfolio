"use client";

import { useViewportHeight } from '@/hooks/useViewportHeight';
import { NohemiSemiBold } from '@/lib/fonts';
import { gsap } from '@/lib/gsap-loader';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import WorkListing from '../WorkListing';

const Work = () => {

    const slider = useRef<HTMLDivElement | null>(null);

    const height = useViewportHeight();

    useGSAP(() => {

        const panels = gsap.utils.toArray(".panel");

        const tl = gsap.timeline({
            defaults: {
                ease: "none"
            },
            scrollTrigger: {
                trigger: slider.current,
                pin: true,
                scrub: 2,
                start: "top top",
                end: () => "+=" + slider.current?.offsetWidth
            }
        })

        tl.to(panels, {
            xPercent: -100 * (panels.length - 1),
        })

    }, [])

  return (
    <div className='overflow-x-hidden'>
      <div ref={slider} style={{ height: height ? height : "100svh"}} className='w-[500vw] flex flex-wrap relative pb-14'>

        <div className='absolute z-50 top-0 left-0 w-screen h-10 md:px-4 px-2'>
            <div className='w-full h-full border-b border-white flex items-center justify-between md:text-base text-sm'>
                <p className={cn("", NohemiSemiBold.className)}>SELECTED WORKS</p>
                <p>23&apos; — Present </p>
            </div>
        </div>

        <section className='w-[100vw] h-full panel flex justify-center items-end'>
            <WorkListing />
        </section>
        <section className='w-[100vw] h-full panel flex justify-center items-end'>
            <WorkListing />
        </section>
        <section className='w-[100vw] h-full panel flex justify-center items-end'>
            <WorkListing />
        </section>
        <section className='w-[100vw] h-full panel flex justify-center items-end'>
            <WorkListing />
        </section>
        <section className='w-[100vw] h-full panel flex justify-center items-end'>
            <WorkListing />
        </section>
      </div>
    </div>
  )
}

export default Work;
