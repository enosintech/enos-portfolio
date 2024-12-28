"use client";

import { NohemiSemiBold } from '@/lib/fonts';
import { gsap, ScrollTrigger } from '@/lib/gsap-loader';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import BannerListing from '../BannerListing';

const Banner = () => {

    useGSAP(() => {

      const cards = document.querySelectorAll(".card");

      const tl = gsap.timeline();

      let cardHeight: number;

      function initCards(){
        tl.clear()
        cardHeight = (cards[0] as HTMLDivElement).offsetHeight
        cards.forEach((card, index) => {
          if(index > 0){
            gsap.set(card, {y:index * cardHeight})
            tl.to(card, {y:0, duration:index*0.5, ease:"none"},0)
          }
        })
      }

      initCards();

      ScrollTrigger.create({
        trigger:".cards",
        start:"top center",
        end:()=>`+=${(cards.length * cardHeight)}`,
        scrub:true,
        animation: tl,
        invalidateOnRefresh:true
      })
      
      ScrollTrigger.addEventListener("refreshInit", initCards)

    }, [])

  return (
    <div className='w-full h-fit relative pt-28'>
      
        <div className='absolute z-50 top-0 left-0 w-screen h-28 md:px-4 px-2'>
            <div className='w-full h-full flex items-center justify-between sm:text-3xl text-2xl'>
                <p className={cn("", NohemiSemiBold.className)}>With Me You Get</p>
            </div>
        </div>

        <div className='cards'>
          <div className='w-full h-96 card grid place-items-center md:px-4 px-2'>
            <BannerListing />
          </div>
          <div className='w-full h-96 card grid place-items-center md:px-4 px-2'>
            <BannerListing />
          </div>
          <div className='w-full h-96 card grid place-items-center md:px-4 px-2'>
            <BannerListing />
          </div>
          <div className='w-full h-96 card grid place-items-center md:px-4 px-2'>
            <BannerListing />
          </div>
        </div>


    </div>
  )
}

export default Banner;
