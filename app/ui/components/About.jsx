"use client";

import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Image from "next/image";

import { triggerToAnimations } from "@/app/utils/animations";

let isTouchDevice;

if(typeof window !== "undefined"){
    isTouchDevice = "ontouchstart" in window; 
} else {
    isTouchDevice;
}

const About = () => {

    useGSAP(() => {
        const split = SplitType.create(".aboutText", {types: "words"});

        triggerToAnimations(split.words, {
            color: "white",
            stagger: 1,
        }, {
            trigger: "#textTrigger",
            start: "top 70%",
            end: "bottom center",
            scrub: true,
        })

        triggerToAnimations(".imageScale", {
            scale: 1,
        }, {
            trigger: ".imageScale",
            start: "top bottom",
            end: "bottom top",
            scrub: 5.5
        })

    }, [])

  return (
    <div className='w-full h-fit flex flex-col px-3 about'>

        <div id="textTrigger" className='w-full h-screen flex flex-col justify-evenly text-[3vw] leading-none tracking-tight font-light relative'>
            <p className="max-w-[96%] max-[490px]:max-w-[100%] sm:max-w-[92%] lg:max-w-[80%] aboutText text-zinc-800">i'm Enos, a creative software engineer and lifelong learner specialized in developing highly performant and interactive websites using JavaScript.</p>
            <p className="max-w-[95%] max-[490px]:max-w-[95%] sm:max-w-[85%] lg:max-w-[75%] aboutText text-zinc-900">i have an orientation for detail and symmetric design. I love when things fit and I have a keen eye for when they dont.</p>
            <p className="max-w-[90%] max-[490px]:max-w-[100%] sm:max-w-[80%] md:max-w-[65%] lg:max-w-[55%] 2xl:max-w-[45%] aboutText text-zinc-950">currently working as a Freelancer based in Lusaka, Zambia.</p> 
        </div>

        <div className='w-full h-screen flex flex-col lg:flex-row'>
            <div className='w-full lg:w-[65%] lg:h-full h-[65%] overflow-hidden rounded-[8px]'>
                <Image 
                    src="/images/enosportrait.jpg"
                    alt="a portrait of enos"
                    width={1200}
                    height={600}
                    className="object-cover w-full h-full scale-[2] imageScale"
                />
            </div>
            <div className="w-full lg:w-[35%] h-[35%] lg:h-full relative">
                <div className="flex flex-col-reverse absolute top-3 lg:top-0 lg:left-5 font-medium leading-none text-[4vw]">
                    <p className={`${isTouchDevice ? "" : "hover-action navlink"}`}>blog</p>
                    <p className={`${isTouchDevice ? "" : "hover-action navlink"}`}>medium</p>
                    <p className={`${isTouchDevice ? "" : "hover-action navlink"}`}>x/twitter</p>
                    <p className={`${isTouchDevice ? "" : "hover-action navlink"}`}>instagram</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About;
