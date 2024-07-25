"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { gsap } from "../../utils/gsapLoader.js";

import WebWorkDesc from "./WebWorkDesc.jsx";
import WebWorkVideo from "./WebWorkVideo.jsx";

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

        tl.to(".work2", {
            y: 0
        }, "<")

        tl.to(".work2", {
            y: "-110%"
        })

        tl.to(".work3", {
            y: 0
        }, "<")

        tl.to(".work3", {
            y: "-110%"
        })

        tl.to(".work4", {
            y: 0
        }, "<")

        tl.to(".work4", {
            y: "-110%"
        })

        tl.to(".work5", {
            y: 0
        }, "<")
        
    }, [])

  return (
    <div ref={workRef} className="w-full h-screen relative">
        <div className="absolute top-0 left-0 w-[20%] h-full pt-[88px] px-2 pb-2">
            <div className="w-full h-full">
                <WebWorkDesc />
            </div>
        </div>
        <div className="absolute top-0 right-0 w-[80%] h-full pt-[88px] px-2 pb-2">
            <div className="w-full h-full relative">
                <div className="w-full h-full absolute work1">
                    <WebWorkVideo />
                </div>
                <div className="w-full h-full absolute work2 translate-y-[110%]">
                    <WebWorkVideo />
                </div>
                <div className="w-full h-full absolute work3 translate-y-[110%]">
                    <WebWorkVideo />
                </div>
                <div className="w-full h-full absolute work4 translate-y-[110%]">
                    <WebWorkVideo />
                </div>
                <div className="w-full h-full absolute work5 translate-y-[110%]">
                    <WebWorkVideo />
                </div>
            </div>
        </div>


      {/* <div className="w-full h-full flex gap-x-4 px-3 py-2">
        <div className="w-[20%] h-full">
            <WebWorkDesc />
        </div>
        <div className="w-[80%] h-full">
            <WebWorkVideo />
        </div>
      </div> */}
    </div>
  )
}

export default SelectedWorks;
