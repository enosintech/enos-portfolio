"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "../../utils/gsapLoader.js";
import SplitType from "split-type";
import Image from "next/image";

import { triggerToAnimations } from "@/app/utils/animations";

import { FontGrotesque } from "@/app/utils/fonts";

let isTouchDevice;

if(typeof window !== "undefined"){
    isTouchDevice = "ontouchstart" in window; 
} else {
    isTouchDevice;
}

const About = () => {

    const workSlider = useRef();

    useGSAP(() => {
        const split = SplitType.create(".aboutText", {types: "words"});

        let row_width = workSlider.current.getBoundingClientRect().width;
        let row_item_width = workSlider.current.children[0].getBoundingClientRect().width;
        let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;

        const tl = gsap.timeline();

        gsap.set(workSlider.current, {
            xPercent: `${initial_offset}`
        });

        tl.to(workSlider.current, {
            ease: "none",
            duration: 15,
            xPercent: 0,
            repeat: -1
        });

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
    <div className='w-full h-fit flex flex-col about'>

        <div id="textTrigger" className='w-full px-3 h-screen flex flex-col justify-evenly text-[3vw] leading-none tracking-tight font-light relative'>
            <p className="max-w-[96%] max-[490px]:max-w-[100%] sm:max-w-[92%] lg:max-w-[80%] aboutText text-zinc-800">i'm Enos, a creative software engineer and lifelong learner specialized in developing highly performant and interactive websites using JavaScript.</p>
            <p className="max-w-[95%] max-[490px]:max-w-[95%] sm:max-w-[85%] lg:max-w-[75%] aboutText text-zinc-900">i have an orientation for detail and symmetric design. I love when things fit and I have a keen eye for when they dont.</p>
            <p className="max-w-[90%] max-[490px]:max-w-[100%] sm:max-w-[80%] md:max-w-[65%] lg:max-w-[55%] 2xl:max-w-[45%] aboutText text-zinc-950">currently working as a Freelancer based in Lusaka, Zambia.</p> 
        </div>

        <div className='w-full h-screen flex flex-col lg:flex-row px-3'>
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

        <div className='mt-10 h-fit'>
            <div className='w-full h-fit border-y-4 border-white'>
                <div ref={workSlider} className={`${FontGrotesque.className} w-full h-fit py-4 text-9xl font-grotesk px-3 flex items-center pt-10 gap-x-6 whitespace-nowrap`}>
                    <p>SELECTED WORKS</p>
                    <p>SELECTED WORKS</p>
                    <p>SELECTED WORKS</p>
                    <p>SELECTED WORKS</p>
                    <p>SELECTED WORKS</p>
                    <p>SELECTED WORKS</p>
                    <p>SELECTED WORKS</p>
                    <p>SELECTED WORKS</p>
                    <p>SELECTED WORKS</p>
                    <p>SELECTED WORKS</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About;
