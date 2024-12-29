"use client";

import { NohemiSemiBold } from '@/lib/fonts';
import { gsap, ScrollTrigger } from '@/lib/gsap-loader';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import BannerListing from '../BannerListing';
import { whatIBring } from '@/constants';

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
            gsap.set(card, {y:index * cardHeight, opacity: 0})
            tl.to(card, {y:0, duration:index*0.5, ease:"none", opacity: 1},0)
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
                <p className={cn("", NohemiSemiBold.className)}>What I Bring</p>
            </div>
        </div>

        <div className='cards md:px-4 px-2'>
          <div className='w-full h-96 card grid place-items-center'>
            <BannerListing title={whatIBring[0].title} description={whatIBring[0].description} />
          </div>
          <div className='w-full h-96 card grid place-items-center'>
            <BannerListing title={whatIBring[1].title} description={whatIBring[1].description} />
          </div>
          <div className='w-full h-96 card grid place-items-center'>
            <BannerListing title={whatIBring[2].title} description={whatIBring[2].description} />
          </div>
          <div className='w-full h-96 card grid place-items-center'>
            <BannerListing title={whatIBring[3].title} description={whatIBring[3].description} />
          </div>
        </div>


    </div>
  )
}

export default Banner;
