"use client";

import { useGSAP } from "@gsap/react";
import { useContext } from "react";
import gsap from "gsap";

import { LoaderContext } from "./Providers";

const Loader = () => {

    const { counterValue, setCanScroll } = useContext(LoaderContext);

    useGSAP(() => {
        if(counterValue === 100){
            const tl = gsap.timeline({});

            tl.to(".loaderBg", {
                y: "-100%",
                opacity: 0,
                ease: "power4.in",
                duration: 0.5,
                display: "none"
            })

            tl.to(".heroText", {
                x: 0,
                opacity: 1,
                ease: "power4.out",
                duration: 2,
                onComplete: () => {
                  setCanScroll(true)
                }
            })

            tl.to("nav", {
                y: 0,
                opacity: 1,
                ease: "power4.out",
                duration: 2
            }, "<")

            tl.to(".scrollImg", {
                x: 0,
                opacity: 1,
                ease: "power4.out",
                duration: 2,
            }, "<")
        }
    }, { dependencies: [counterValue]})

  return (
    <div className="w-full h-screen bg-black z-[100000] fixed top-0 left-0 loaderBg">
        <div className="absolute flex flex-col items-center gap-y-3 top-0 left-0 right-0 mx-auto w-fit z-[2000] loader">
            <span className="lg:w-[3px] w-[1.5px] lg:h-80 h-60 bg-white"></span>
            <p className="lg:text-2xl text-lg font-semibold tracking-tight">{counterValue}<span>%</span></p>
        </div>
    </div>
  )
}

export default Loader;
