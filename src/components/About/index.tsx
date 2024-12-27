"use client";

import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

import { triggerToAnimations } from '@/lib/animations';
import { NohemiLight } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import { useViewportHeight } from '@/hooks/useViewportHeight';
import Image from 'next/image';

const About = () => {

    const height = useViewportHeight();

    useGSAP(() => {

        const split = SplitType.create(".aboutText", { types: "words"});

        triggerToAnimations(split.words, {
            color: "white",
            stagger: 0.5
        }, {
            trigger: ".about",
            start: "top top",
            scrub: true,
            pin: true,
        })

        triggerToAnimations(".scaleImg", {
            scale: 1,
        }, {
            trigger: ".scaleImg",
            start: "top bottom",
            end: "bottom -300%",
            scrub: 5.5,
        })

    }, [])



  return (
    <section style={{ height: height ? height * 2 : "200svh" }} className='w-full about bg-black relative z-20 px-4'>
        <div className={cn('w-full h-1/2 pb-12 text-[3vw] leading-none flex flex-col justify-evenly', NohemiLight.className)}>
            <p className='max-w-[96%] max-[490px]:max-w-[100%] sm:max-w-[92%] lg:max-w-[80%] text-zinc-800 aboutText'>I'm Enos, a creative software engineer and lifelong learner specialized in developing highly performant and interactive websites using JavaScript.</p>
            <p className='max-w-[95%] max-[490px]:max-w-[95%] sm:max-w-[85%] lg:max-w-[75%] text-zinc-900 aboutText'>I have an orientation for detail and symmetric design. I love when things fit and I have a keen eye for when they dont.</p>
            <p className='max-w-[90%] max-[490px]:max-w-[100%] sm:max-w-[80%] md:max-w-[65%] lg:max-w-[55%] text-zinc-950 aboutText'>Currently working as a Freelancer based in Lusaka, Zambia.</p>
        </div>
        <div className='w-full h-1/2 flex moreAbout'>
            <div className='w-[65%] h-full overflow-hidden rounded-[8px] relative moreAbout'>
                <Image 
                    src="/images/enosportrait.jpg"
                    alt="a portrait of enos"
                    fill
                    className='object-cover scale-[2] scaleImg'
                />
            </div>
            <div className='w-[35%] h-full bg-red-500'></div>
        </div>
    </section>
  )
}

export default About;
