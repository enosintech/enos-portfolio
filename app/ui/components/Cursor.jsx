'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { noTriggerToAnimations } from "@/app/utils/animations";

let isTouchDevice;

if(typeof window !== "undefined"){
    isTouchDevice = "ontouchstart" in window; 
} else {
    isTouchDevice;
}

const Cursor = () => {

    useGSAP(() => {

        if(isTouchDevice) {
            return;
        }

        gsap.set("#cursor", {xPercent: -50, yPercent: -50})
        gsap.set("#cursor3", {xPercent: -50, yPercent: -50})
        gsap.set("#cursorGlow", {xPercent: -50, yPercent: -50})

        window.addEventListener("mousemove", (e) => {

            const {target} = e;

            const isTargetLinkOrBtn = target?.closest("a") || target?.closest("button") || target?.closest(".navlink");
            const isWhiteBg = target?.closest(".white");
            const isTargetListLink = target?.closest(".list")

            noTriggerToAnimations("#cursor", {
                duration: .7,
                x: e.clientX,
                y: e.clientY,
                backgroundColor: isWhiteBg ? "black" : "white",
                opacity: isTargetListLink ? 0 : 1,
                transform: `scale(${isTargetLinkOrBtn ? 0.5 : 1.3})`,
                ease: "power4",
                overwrite: "auto",
            });

            noTriggerToAnimations("#cursor3", {
                duration: .7,
                x: e.clientX,
                y: e.clientY,
                opacity: isTargetListLink ? 1 : 0,
                ease: "power4",
                overwrite: "auto"
            });

            noTriggerToAnimations("#cursorGlow", {
                duration: .7,
                x: e.clientX,
                y: e.clientY,
                opacity: isTargetListLink ? 0 : 1,
                ease: "power4",
                overwrite: "auto"
            });
        })

        document.addEventListener("mouseleave", () => {
            noTriggerToAnimations("#cursor", {
                duration: 0.7,
                opacity: 0,
                ease: "power4"
            })
        })
    }, [])

  return (
    <>
        <div id="cursor" className="w-4 h-4 fixed top-0 left-0 rounded-full z-[110000] opacity-0 select-none pointer-events-none deep-shadow"></div>
        <div id="cursor3" className="w-20 h-20 bg-white fixed top-0 left-0 rounded-full z-[120000] opacity-0 select-none pointer-events-none flex items-center justify-center deep-shadow">
            <p className="text-black text-[14px] tracking-tighter">click me</p>
        </div>
        <div id="cursorGlow" className="w-[400px] h-[400px] fixed top-0 left-0 rounded-full z-[-1] opacity-0 select-none pointer-events-none radial"></div>
    </>
  )
}

export default Cursor;