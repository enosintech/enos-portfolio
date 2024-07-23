"use client";

import { useGSAP } from "@gsap/react";
import { useLenis } from "@studio-freight/react-lenis";
import { ScrollTrigger } from "@/app/utils/gsapLoader";
import Image from "next/image";

import { triggerToAnimations } from "@/app/utils/animations";

const Navbar = () => {

    const lenis = useLenis();

    const handleContactClick = () => {
        lenis?.scrollTo(ScrollTrigger.maxScroll(window), { immediate: true, force: true })
    }

    useGSAP(() => {
        triggerToAnimations(".scroller", {
            width: "100%",
            ease: "none"
        }, {
            trigger: "html",
            start: "clamp(top top)",
            end: 'clamp(bottom bottom)',
            scrub: true,
        })

        triggerToAnimations(".contactBtn", {
            opacity: 0,
            duration: .3,
            display: "none"
        }, {
            trigger: "#contact",
            start: "top bottom",
            toggleActions: "play none none reverse",
        })

    }, [])

  return (
    <nav className="fixed z-[200] top-0 left-0 w-full h-[80px] backdrop-blur-md flex items-center justify-between px-3 -translate-y-[100%] opacity-0">
        <Image 
            src="/icons/logo.png"
            alt="enosintech logo"
            width={32}
            height={32}
            className="invert rotate-[45deg]"
        />
        <div onClick={handleContactClick} className="px-3 p-2 rounded-full border-2 border-white hover:bg-white active:opacity-50 active:scale-95 transition-all group navlink white contactBtn">
            <p className="font-extrabold text-[1vw] tracking-tighter group-hover:text-black transition-all">CONTACT ME</p>
        </div>
        <div className="absolute w-full h-[2px] bottom-0 left-0 px-3">
            <div className="w-full h-full bg-[rgba(255,255,255,0.3)]">
                <div className="w-0 h-full bg-white scroller"></div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
