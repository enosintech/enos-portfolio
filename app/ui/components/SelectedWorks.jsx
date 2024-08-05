"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { gsap } from "../../utils/gsapLoader.js";

import WebWorkVideo from "./WebWorkVideo.jsx";

import { selectedWorks } from "@/app/lib/constantData.js";

import { FontGrotesque } from "@/app/utils/fonts.js";

const SelectedWorks = () => {

    const workRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "none"
            },
            scrollTrigger: {
                trigger: workRef.current,
                start: "top top",
                end: () => "+=" + workRef.current.offsetHeight * 5,
                pin: true,
                scrub: true,
                pinSpacing: true,
            }
        })

        tl.to(".work1", {
            y: "-110%"
        })

        tl.to(".fadeOut", {
            opacity: 0.1,
        }, "<")

        tl.to(".fadeIn1", {
            opacity: 1,
        }, "<")

        tl.to(".work2", {
            y: 0
        }, "<")

        tl.to(".work2", {
            y: "-110%"
        })

        tl.to(".fadeIn1", {
            opacity: 0.1,
        }, "<")

        tl.to(".fadeIn2", {
            opacity: 1,
        }, "<")

        tl.to(".work3", {
            y: 0
        }, "<")

        tl.to(".work3", {
            y: "-110%"
        })

        tl.to(".fadeIn2", {
            opacity: 0.1,
        }, "<")

        tl.to(".fadeIn3", {
            opacity: 1,
        }, "<")

        tl.to(".work4", {
            y: 0
        }, "<")

        tl.to(".work4", {
            y: "-110%"
        })

        tl.to(".fadeIn3", {
            opacity: 0.1,
        }, "<")

        tl.to(".fadeIn4", {
            opacity: 1,
        }, "<")

        tl.to(".work5", {
            y: 0
        }, "<")
        
    }, [])

  return (
    <div ref={workRef} className="w-full h-screen relative">
        <div className="absolute top-0 left-0 w-[20%] h-full pt-[88px] px-2 pb-2">
            <div className="w-full h-full">
                <div className="w-full h-full border-2 border-white rounded-[8px] overflow-hidden lg:rounded-[12px] flex lg:flex-col lg:items-end justify-between py-5 lg:text-right pr-3 relative">
                    <p className="absolute bottom-2 right-4 text-[12px] tracking-tighter font-thin">23 – present</p>
                    <div className="flex flex-col lg:items-end gap-y-3 lg:gap-y-5 pl-3">
                        <div className={`${FontGrotesque.className} flex flex-col fadeOut items-start lg:items-end max-[490px]:text-[11vw] text-[6vw] md:text-[5vw] lg:text-[2.2vw] xl:text-[3.5vw] leading-none tracking-normal uppercase`}>
                            <p>ZEDCART</p>
                        </div>
                        <div className="flex items-center gap-x-3 fadeOut">
                            <div className="bg-zinc-800 rounded-full px-2 p-1">
                            <p className="font-semibold tracking-tight text-[0.7rem]">WEB</p>
                            </div>
                            <div className="bg-primary rounded-full px-2 p-1 text-black">
                            <p className="font-bold tracking-tight text-[0.7rem]">CLIENT</p>
                            </div>
                        </div>
                        <div className={`${FontGrotesque.className} fadeIn1 opacity-10 flex flex-col items-start lg:items-end max-[490px]:text-[11vw] text-[6vw] md:text-[5vw] lg:text-[2.2vw] xl:text-[3.5vw] leading-none tracking-normal uppercase`}>
                            <p>YSGTM</p>
                        </div>
                        <div className="flex items-center gap-x-3 fadeIn1 opacity-10">
                            <div className="bg-zinc-800 rounded-full px-2 p-1">
                            <p className="font-semibold tracking-tight text-[0.7rem]">WEB</p>
                            </div>
                            <div className="bg-primary rounded-full px-2 p-1 text-black">
                            <p className="font-bold tracking-tight text-[0.7rem]">PERSONAL</p>
                            </div>
                        </div>
                        <div className={`${FontGrotesque.className} flex flex-col fadeIn2 opacity-10 items-start lg:items-end max-[490px]:text-[11vw] text-[6vw] md:text-[5vw] lg:text-[2.2vw] xl:text-[3.5vw] leading-none tracking-normal uppercase`}>
                            <p>MAKEUPBYRAM</p>
                        </div>
                        <div className="flex items-center gap-x-3 fadeIn2 opacity-10">
                            <div className="bg-zinc-800 rounded-full px-2 p-1">
                            <p className="font-semibold tracking-tight text-[0.7rem]">WEB</p>
                            </div>
                            <div className="bg-primary rounded-full px-2 p-1 text-black">
                            <p className="font-bold tracking-tight text-[0.7rem]">CLIENT</p>
                            </div>
                        </div>
                        <div className={`${FontGrotesque.className} fadeIn3 opacity-10 flex flex-col items-start lg:items-end max-[490px]:text-[11vw] text-[6vw] md:text-[5vw] lg:text-[2.2vw] xl:text-[3.5vw] leading-none tracking-normal uppercase`}>
                            <p>BRIGHT</p>
                        </div>
                        <div className="flex items-center gap-x-3 fadeIn3 opacity-10">
                            <div className="bg-zinc-800 rounded-full px-2 p-1">
                            <p className="font-semibold tracking-tight text-[0.7rem]">MOBILE</p>
                            </div>
                            <div className="bg-primary rounded-full px-2 p-1 text-black">
                            <p className="font-bold tracking-tight text-[0.7rem]">PERSONAL</p>
                            </div>
                        </div>
                        <div className={`${FontGrotesque.className} fadeIn4 opacity-10 flex flex-col items-start lg:items-end max-[490px]:text-[11vw] text-[6vw] md:text-[5vw] lg:text-[2.2vw] xl:text-[3.5vw] leading-none tracking-normal uppercase`}>
                            <p>BANTURIDE</p>
                        </div>
                        <div className="flex items-center gap-x-3 fadeIn4 opacity-10">
                            <div className="bg-zinc-800 rounded-full px-2 p-1">
                            <p className="font-semibold tracking-tight text-[0.7rem]">MOBILE</p>
                            </div>
                            <div className="bg-primary rounded-full px-2 p-1 text-black">
                            <p className="font-bold tracking-tight text-[0.7rem]">CLIENT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute top-0 right-0 w-[80%] h-full pt-[88px] px-2 pb-2">
            <div className="w-full h-full relative">
                <div className="w-full h-full absolute work1">
                    <WebWorkVideo {...selectedWorks[0]}/>
                </div>
                <div className="w-full h-full absolute work2 translate-y-[110%]">
                    <WebWorkVideo {...selectedWorks[3]} />
                </div>
                <div className="w-full h-full absolute work3 translate-y-[110%]">
                    <WebWorkVideo {...selectedWorks[1]} />
                </div>
                <div className="w-full h-full absolute work4 translate-y-[110%]">
                    <WebWorkVideo {...selectedWorks[2]} />
                </div>
                <div className="w-full h-full absolute work5 translate-y-[110%]">
                    <WebWorkVideo {...selectedWorks[4]} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SelectedWorks;
