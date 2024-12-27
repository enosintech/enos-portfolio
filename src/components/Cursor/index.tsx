"use client";

import { checkIsTouchDevice } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { gsap } from "@/lib/gsap-loader";
import { noTriggerToAnimations } from "@/lib/animations";

const Cursor = () => {

    const cursorRef = useRef<HTMLDivElement | null>(null);

    const isTouchDevice = checkIsTouchDevice();

    useGSAP(() => {

        if(isTouchDevice) {
            return;
        }

        gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
        
        const onMouseMove = (e: MouseEvent) => {

            const target = e.target as Element | null;

            const isActionable = target?.closest(".actionable");

            noTriggerToAnimations(cursorRef.current, {
                duration: 0.7,
                x: e.clientX,
                y: e.clientY,
                transform: `scale(${isActionable ? 0.5 : 1})`,
                ease: "power4",
                overwrite: "auto",
            })

        }

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
        
    }, [])

  return (
    <div ref={cursorRef} className="size-4 z-[10000] fixed top-0 left-0 rounded-full select-none pointer-events-none bg-white deep-shadow"></div>
  )
}

export default Cursor;
