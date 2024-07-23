"use client";

import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Image from "next/image";

import { techStack } from "@/app/lib/constantData";

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

        <div className="w-full h-[90vh] lg:h-[100vh] flex flex-col">
            <div className="w-full h-[15%] flex items-end pb-3 md:pb-0 md:items-center">
                <p className="font-[500] tracking-tight text-[4vw]">tech stack</p>
            </div>
            <div className="w-full h-[85%] flex flex-col">
                {techStack.map((item, idx) => (
                    <div key={item.id} className="w-full h-1/4 border-t-2 border-white flex flex-col lg:flex-row items-start">
                        <div className="w-full lg:w-[30%] lg:h-full h-[25%] mt-2">
                            <p className="tracking-tight font-medium text-[2vw]">{item.name}</p>
                        </div>
                        <div className="w-full lg:w-[70%] lg:h-full h-[75%] flex items-start mt-2 md:mt-4 flex-wrap">
                            {item.data.map((itemData, index) => (
                                <div key={itemData.id} className={`flex items-center gap-x-2 w-1/3 ${idx === 3 ? "mr-4" : ""}`}>
                                    <Image 
                                        src={itemData.logo}
                                        alt="software logo"
                                        width={24}
                                        height={24}
                                        priority={true}
                                        className={`size-4 sm:size-5 md:size-6 object-contain ${(index === 0 && idx === 0 || idx === 1 || idx === 3) || index === 1 || index === 2 || index === 3 || index === 4 ? "invert" : "invert-0"}`}
                                    />
                                    <p className={`font-light lg:text-2xl text-[1vw] sm:text-[1.1vw] tracking-tight`}>{itemData.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default About;
