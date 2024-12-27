"use client";

import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import Image from 'next/image';

import { NohemiLight, NohemiSemiBold } from '@/lib/fonts';
import { triggerToAnimations } from '@/lib/animations';
import { cn } from '@/lib/utils';

import { useViewportHeight } from '@/hooks/useViewportHeight';
import { exploring, services, tech } from '@/constants';

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
    <section style={{ height: height ? height * 2 : "200svh" }} className='w-full about bg-black relative z-20 px-2 md:px-4'>

        <div className='absolute top-0 left-0 w-full h-10 md:px-4 px-2'>
            <div className='w-full h-full border-b border-white flex items-center'>
                <p className={cn("", NohemiSemiBold.className)}>ABOUT ME</p>
            </div>
        </div>

        <div className={cn('w-full h-1/2 pb-12 max-[500px]:text-[7vw] text-[6vw] sm:text-[5vw] md:text-[4vw] xl:text-[3vw] leading-none flex flex-col justify-evenly', NohemiLight.className)}>
            <p className='max-w-[96%] max-[490px]:max-w-[100%] sm:max-w-[92%] lg:max-w-[80%] text-zinc-950 aboutText'>I&apos;m Enos, a creative software engineer and lifelong learner specialized in developing highly performant and interactive websites using TypeScript.</p>
            <p className='max-w-[95%] max-[490px]:max-w-[95%] sm:max-w-[85%] lg:max-w-[75%] text-zinc-950 aboutText'>I have an orientation for detail and symmetric design. I love when things fit and I have a keen eye for when they dont.</p>
            <p className='max-w-[90%] max-[490px]:max-w-[100%] sm:max-w-[80%] md:max-w-[65%] lg:max-w-[55%] text-zinc-950 aboutText'>Currently working as a Freelancer based in Lusaka, Zambia.</p>
        </div>
        <div className='w-full h-1/2 flex flex-col lg:flex-row moreAbout'>
            <div className='w-full lg:w-[65%] lg:h-full h-[55%] overflow-hidden rounded-[5px] relative moreAbout'>
                <Image 
                    src="/images/enosportrait.jpg"
                    alt="a portrait of enos"
                    fill
                    className='object-cover scale-[2] scaleImg'
                />
            </div>
            <div className={cn('w-full lg:w-[35%] h-[45%] lg:h-full flex lg:flex-col flex-wrap justify-between lg:justify-normal pt-5 lg:pt-0 lg:gap-10 lg:px-2', NohemiLight.className)}>
                <div className='text-xs md:text-sm md:w-fit w-1/2'>
                    <p className='sm:mb-2 mb-1 text-xs text-neutral-500'>Services</p>

                    <div>
                        {services.map((service) => (
                            <p key={service.service}>{service.service}</p>
                        ))}
                    </div>
                </div>
                <div className='text-xs md:text-sm md:w-fit w-1/2'>
                    <p className='sm:mb-2 mb-1 text-xs text-neutral-500'>Technologies</p>

                    <div>
                        {tech.map((tech) => (
                            <p key={tech.tech}>{tech.tech}</p>
                        ))}
                    </div>
                </div>
                <div className='text-xs md:text-sm'>
                    <p className='sm:mb-2 mb-1 text-xs text-neutral-500'>Exploring</p>

                    <div>
                        {exploring.map((explore) => (
                            <p key={explore.service}>{explore.service}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;
