"use client";

import { useViewportHeight } from '@/hooks/useViewportHeight';
import { NohemiSemiBold } from '@/lib/fonts';
import { gsap } from '@/lib/gsap-loader';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import WorkListing from '../WorkListing';
import SplitType from 'split-type';
import { triggerToAnimations } from '@/lib/animations';

const Work = () => {

    const slider = useRef<HTMLDivElement | null>(null);

    const height = useViewportHeight();

    useGSAP(() => {

        const split = SplitType.create(".workText1", { types: "chars"});
        const split2 = SplitType.create(".workText2", { types: "chars"});

        gsap.set(split.chars, { opacity: 0, y: 40})
        gsap.set(split2.chars, { opacity: 0, y: 40})

        const panels = gsap.utils.toArray(".panel");

        triggerToAnimations(split.chars, {
            y: 0,
            opacity: 1,
            stagger: 0.02,
            ease: "power4.out"
        }, {
            trigger: ".work",
            start: "top 80%",
        })
        
        triggerToAnimations(split2.chars, {
            y: 0,
            opacity: 1,
            stagger: 0.02,
            ease: "power4.out"
        }, {
            trigger: ".work",
            start: "top 80%",
        })

        const tl = gsap.timeline({
            defaults: {
                ease: "none"
            },
            scrollTrigger: {
                trigger: slider.current,
                pin: true,
                scrub: true,
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
      <div ref={slider} style={{ height: height ? height : "100svh"}} className='w-[500vw] flex flex-wrap relative pb-14 work'>

        <div className='absolute z-50 top-0 left-0 w-screen h-28 md:px-4 px-2'>
            <div className='w-full h-full flex items-center justify-between lg:text-5xl sm:text-3xl text-xl'>
                <p className={cn("workText1", NohemiSemiBold.className)}>Featured Work</p>
                <p className='workText2'>23&apos; — Present </p>
            </div>
        </div>

        <section className='w-[100vw] h-full panel flex justify-center items-end md:px-4 px-2'>
            <WorkListing />
        </section>
        <section className='w-[100vw] h-full panel flex justify-center items-end md:px-4 px-2'>
            <WorkListing />
        </section>
        <section className='w-[100vw] h-full panel flex justify-center items-end md:px-4 px-2'>
            <WorkListing />
        </section>
        <section className='w-[100vw] h-full panel flex justify-center items-end md:px-4 px-2'>
            <WorkListing />
        </section>
        <section className='w-[100vw] h-full panel flex justify-center items-end md:px-4 px-2'>
            <WorkListing />
        </section>
      </div>
    </div>
  )
}

export default Work;
