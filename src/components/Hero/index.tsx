"use client"

import { useViewportHeight } from '@/hooks/useViewportHeight';
import { triggerToAnimations } from '@/lib/animations';
import { ScrollTrigger } from '@/lib/gsap-loader';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const Hero = () => {

    const heroRef = useRef<HTMLDivElement | null>(null);

    const height = useViewportHeight();

    useGSAP(() => {
        
        ScrollTrigger.create({
            trigger: heroRef.current,
            start: "top top",
            end: "bottom -0%",
            pin: true,
            pinSpacing: false
        })

        triggerToAnimations(heroRef.current, {
            opacity: 0.4
        }, {
            trigger: ".about",
            start: "top bottom",
            end: "top top",
            scrub: true
        })

    }, [])

  return (
    <section ref={heroRef} style={{ height: height ? height : "100svh"}} className='w-full bg-black relative z-10'>
        hero
    </section>
  )
}

export default Hero;
