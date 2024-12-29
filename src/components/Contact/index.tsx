"use client";

import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import Image from 'next/image';

import { NohemiBold, NohemiMedium, NohemiSemiBold } from '@/lib/fonts';
import { triggerToAnimations } from '@/lib/animations';
import { socials } from '@/constants';
import { gsap } from '@/lib/gsap-loader';
import { cn } from '@/lib/utils';

const Contact = () => {

  const [ time, setTime ] = useState("");

  useGSAP(() => {

    const split = SplitType.create(".contactText", {types: "chars"})
    const split2 = SplitType.create(".contactText2", {types: "chars"})

    gsap.set(split.chars, { opacity: 0, y: 40})
    gsap.set(split2.chars, { opacity: 0, y: 40})
    

    triggerToAnimations(split.chars, {
      y: 0,
      opacity: 1,
      stagger: 0.01,
      ease: "power4.out"
    }, {
      trigger: ".contact",
      start: "top center",
    })

    triggerToAnimations(split2.chars, {
      y: 0,
      opacity: 1,
      stagger: 0.01,
      ease: "power4.out"
    }, {
      trigger: ".contact",
      start: "top center",
    })

    triggerToAnimations(".showup", {
      opacity: 1
    }, {
      trigger: ".contact",
      start: "top center",
      end: "top top",
      scrub: true
    })

    triggerToAnimations(".contactScale", {
      scale: 1
    }, {
      trigger: ".contact",
      start: "top bottom",
      end: "top top",
      scrub: 5
    })

  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString("en-US", {timeZone: "Africa/Lusaka"}))
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  return (
    <div className='w-full h-screen relative pb-12 flex flex-col contact'>

      <div className='absolute top-5 md:left-4 left-2 opacity-0 showup'>
        <p className='text-neutral-600 text-sm'>Lusaka, Zambia</p>
        <p className={cn("text-lg", NohemiSemiBold.className)}>
          {time} (GMT +2)
        </p>
      </div>

      <div className='w-full h-1/2 flex justify-end md:px-4 px-2 relative'>

        <div className='absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden'>
          <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black to-[99%] via-transparent to-black'></div>
          <Image 
            src="/images/earth-bg.webp"
            alt="earth background image"
            fill
            className='object-cover z-[-1] scale-150 contactScale'
          />
        </div>

        <div className='w-fit h-full flex flex-col justify-end pb-10'>
          <div>
            <p className={cn('text-sm sm:text-lg lg:text-2xl contactText', NohemiMedium.className)}>Minding a project? let&apos;s work together </p>
            <a href="mailto:hi@enosintech.com" className={cn("text-4xl sm:text-5xl lg:text-7xl mt-1 sm:mt-2 contactText2 actionable hover:opacity-80 active:opacity-60 cursor-pointer", NohemiBold.className)}>hi@enosintech.com</a>
          </div>
        </div>
      </div>

      <div className='w-full h-1/2 md:px-4 px-2 flex flex-col gap-4'>
        <hr className='border-white' />
        <hr className='border-white' />
        <hr className='border-white' />
        <hr className='border-white' />
        <hr className='border-white sm:block hidden' />
        <hr className='border-white sm:block hidden' />
        <hr className='border-white sm:block hidden' />
        <hr className='border-white sm:block hidden' />
        <hr className='border-white sm:block hidden' />

        <div className='flex flex-wrap justify-between w-full flex-1'>
          {socials.map((network) => (
            <div key={network.network} className='min-w-1/2 w-1/2 lg:w-fit h-fit'>
              <div className='flex items-center'>
                <a target="_blank" href={network.link} className={cn("actionable hover:opacity-80 active:opacity-60 cursor-pointer", NohemiBold.className)}>{network.network}</a>
                <ArrowUpRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact;
