"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Globe } from "lucide-react"

import { noTriggerToAnimations } from "@/lib/animations";
import { NohemiBold } from '@/lib/fonts';

const FixedBottomNav = () => {

    const workAnimRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        noTriggerToAnimations(workAnimRef.current, {
            scale: 1.4,
            repeat: -1,
            yoyo: true,
            duration: 0.7,
            ease: "power4.inOut"
        })
    }, [])

  return (
    <div className={`fixed bottom-0 left-0 lg:text-base sm:text-sm text-xs bg-neutral-900 h-12 px-2 md:px-4 w-full flex items-center justify-between z-[9999] ${NohemiBold.className}`}>
        <p className="md:block hidden">BASED IN LUSAKA, ZAMBIA</p>
        <div className="flex items-center gap-1">
            <Globe className="size-5 animate-spin-slow" />
            <p className="translate-y-[0.5px]">WORKING GLOBALLY</p>
        </div>
        <div className="flex items-center gap-2">
            <div ref={workAnimRef} className="size-2 rounded-full bg-accent"></div>
            <p className="translate-y-[0.5px]">ACCEPTING WORK</p>
        </div>
    </div>
  )
}

export default FixedBottomNav;
