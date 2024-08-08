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
            opacity: 0.05,
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
            opacity: 0.05,
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
            opacity: 0.05,
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
            opacity: 0.05,
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
                    <p className="text-[1rem] font-medium tracking-tighter absolute top-3 left-4">WEB</p>
                    <div className="flex flex-col lg:items-end gap-y-3 lg:gap-y-5 pl-3 w-full">
                        <div className={`${FontGrotesque.className} flex flex-col fadeOut items-start lg:items-end max-[490px]:text-[11vw] text-[6vw] md:text-[5vw] lg:text-[2.2vw] xl:text-[3.3vw] leading-none tracking-normal uppercase`}>
                            <p>ZEDCART</p>
                        </div>
                        <div className="flex items-center gap-x-3 fadeOut">
                            <div className="bg-primary rounded-full px-2 p-1 text-black">
                                <p className="font-bold tracking-tighter text-[0.6rem]">CLIENT</p>
                            </div>
                            <div className="bg-white rounded-full px-2 p-1 text-black">
                                <p className="font-bold tracking-tighter text-[0.6rem]">NEXT.JS</p>
                            </div>
                        </div>
                        <div className={`${FontGrotesque.className} fadeIn1 opacity-5 flex flex-col items-start lg:items-end max-[490px]:text-[11vw] text-[6vw] md:text-[5vw] lg:text-[2.2vw] xl:text-[3.3vw] leading-none tracking-normal uppercase`}>
                            <p>3D SHOWROOM</p>
                        </div>
                        <div className="flex items-center gap-x-3 fadeIn1 opacity-5">
                            <div className="bg-primary rounded-full px-2 p-1 text-black">
                                <p className="font-bold tracking-tighter text-[0.6rem]">PERSONAL</p>
                            </div>
                            <div className="bg-white rounded-full px-2 p-1 text-black">
                                <p className="font-bold tracking-tighter text-[0.6rem]">THREE.JS</p>
                            </div>
                        </div>
                        <div className={`${FontGrotesque.className} fadeIn2 opacity-5 flex flex-col items-start lg:items-end max-[490px]:text-[11vw] text-[6vw] md:text-[5vw] lg:text-[2.2vw] xl:text-[3.3vw] leading-none tracking-normal uppercase`}>
                            <p>YSGTM</p>
                        </div>
                        <div className="flex items-center gap-x-3 fadeIn2 opacity-5">
                            <div className="bg-primary rounded-full px-2 p-1 text-black">
                                <p className="font-bold tracking-tighter text-[0.6rem]">PERSONAL</p>
                            </div>
                            <div className="bg-white rounded-full px-2 p-1 text-black">
                                <p className="font-bold tracking-tighter text-[0.6rem]">NEXT.JS</p>
                            </div>
                        </div>
                        <div className={`${FontGrotesque.className} flex flex-col fadeIn3 opacity-5 items-start lg:items-end max-[490px]:text-[11vw] text-[6vw] md:text-[5vw] lg:text-[2.2vw] xl:text-[3.3vw] leading-none tracking-normal uppercase`}>
                            <p>MAKEUPBYRAM</p>
                        </div>
                        <div className="flex items-center gap-x-3 fadeIn3 opacity-5">
                            <div className="bg-primary rounded-full px-2 p-1 text-black">
                                <p className="font-bold tracking-tighter text-[0.6rem]">CLIENT</p>
                            </div>
                            <div className="bg-white rounded-full px-2 p-1 text-black">
                                <p className="font-bold tracking-tighter text-[0.6rem]">NEXT.JS</p>
                            </div>
                        </div>
                        <div className={`${FontGrotesque.className} fadeIn4 opacity-5 flex flex-col items-start lg:items-end max-[490px]:text-[11vw] text-[6vw] md:text-[5vw] lg:text-[2.2vw] xl:text-[3.3vw] leading-none tracking-normal uppercase`}>
                            <p>RUSANGU</p>
                        </div>
                        <div className="flex items-center gap-x-3 fadeIn4 opacity-5">
                            <div className="bg-primary rounded-full px-2 p-1 text-black">
                                <p className="font-bold tracking-tighter text-[0.6rem]">CLIENT</p>
                            </div>
                            <div className="bg-white rounded-full px-2 p-1 text-black">
                                <p className="font-bold tracking-tighter text-[0.6rem]">NEXT.JS</p>
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
                    <WebWorkVideo {...selectedWorks[2]} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SelectedWorks;
