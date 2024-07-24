"use client";

import { useLenis } from "@studio-freight/react-lenis";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { Tilt } from "react-tilt";
import Image from "next/image";

import ProcessList from "./ProcessList";

import { processAttributes, processList } from "@/app/lib/constantData";

import { noTriggerToAnimations } from "@/app/utils/animations";

let isTouchDevice;

if(typeof window !== "undefined"){
    isTouchDevice = "ontouchstart" in window; 
} else {
    isTouchDevice;
}

const Contact = () => {

    const emailClickRef = useRef();
    const path = useRef(null);

    let progress = 0;
    let reqId = null;
    let time = Math.PI / 2;

    let x = 0.5;

    const lenis = useLenis();
    const [ enlarged, setEnlarged ] = useState();
    const [ loading, setLoading ] = useState(false);

    const handleBackToTop = () => {
        lenis?.scrollTo(0, { immediate: true, force: true })
    };

    const handleSetEnlarged = (value) => {
        setEnlarged(value)
    }

    const handleCopyText = () => {
        const copyText = document.getElementById("emailInput");

        copyText.select();
        copyText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyText.value);

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 4000)
    }

    const setPath = (value) => {
        const width = window.innerWidth;
        path.current.setAttributeNS(null, "d", `M 0 50 Q ${width * x} ${50 + value} ${width} 50`)
    }
    
    const manageMouseMove = (e) => {
        const { movementY } = e;
    
        const box = e.target.getBoundingClientRect();
    
        x = (e.clientX - box.left) / box.width;
    
        progress += movementY;
    }

    const animateIn = () => {
        if(reqId){
            cancelAnimationFrame(reqId);

            time = Math.PI / 2;
        }

        setPath(progress);

        reqId = requestAnimationFrame(animateIn);
    }   

    const resetAnimation = () => {
        cancelAnimationFrame(reqId)

        animateOut();
    }

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const animateOut = () => {

        let newProgress = progress * Math.sin(time);

        setPath(newProgress)

        progress = lerp(progress, 0, .04);

        time+=0.2;

        if(Math.abs(progress) > 0.5){

        reqId = requestAnimationFrame(animateOut)

        }

        else{

        time = Math.PI / 2;

        progress = 0;

        }
    }

    useGSAP(() => {
        noTriggerToAnimations(".copied", {
            opacity: loading ? 1 : 0,
            x: loading ? 0 : -40,
        })
    }, { dependencies: [loading]})

    useEffect(() => {
        setPath(progress);

        window.addEventListener('resize', () => {
            setPath(progress);
        })
    }, [])

  return (
    <>
        <div className="w-full h-[70vh] lg:h-[85vh] flex flex-col px-3 mt-5 relative z-5">
            <div className="w-full h-[15%] flex items-end pb-1 md:pb-0 md:items-center">
                <p className="font-[500] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">my process</p>
            </div>
            <div className="w-full h-[85%] flex flex-col mt-3">
                {processList.map((item, idx) => (
                    <ProcessList enlarged={enlarged} handleSetEnlarged={handleSetEnlarged} key={item.id} index={idx} {...item} />
                ))}
            </div>
        </div>
        <div className="w-full max-[490px]:h-[55vh] h-[60vh] mb-10 px-3 lg:flex grid grid-rows-2 grid-cols-2 lg:items-center lg:justify-between gap-3 md:gap-5 lg:gap-x-5">
            {processAttributes.map((item, idx) => (
                <Tilt key={item.id} className="lg:w-[25%] lg:h-[90%] rounded-[12px] overflow-hidden">
                    <div className="w-full h-full rounded-[12px] border-white border-[3px] deep-shadow hover:bg-white transition-all group relative white">
                        <Image 
                            src="/icons/quality.svg"
                            alt="quality icon"
                            width={56}
                            height={56}
                            className="absolute top-2 left-0 invert size-14 sm:size-20 xl:size-24 object-contain group-hover:invert-0 transition-all group-hover:animate-spin"
                        />
                        <p className="absolute bottom-3 left-3 max-[500px]:text-xl text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-4xl tracking-tight font-[600] group-hover:text-black transition-all">{item.name}</p>
                    </div>
                </Tilt>
            ))}
        </div>
        <div id="contact" className="w-full h-[100vh] flex flex-col items-center pt-44 px-3 relative">
            <div className="w-full h-[60%] flex flex-col gap-y-5 md:gap-y-20">
                <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:text-center h-[30%] font-[500] tracking-tight">Let's create something <span className="text-primary">together</span></p>
                <div className="w-full h-[70%] flex flex-col gap-y-4 md:px-14 lg:px-20 xl:px-28 2xl:px-44 relative">
                    <div className={`h-[1px] relative w-full mb-[20px] line`}>
                        <span onMouseEnter={() => {animateIn()}} onMouseLeave={() => {resetAnimation()}} onMouseMove={(e) => {manageMouseMove(e)}} className={`w-full h-[40px] flex relative top-[-20px] z-[1]`}></span>
                        <svg>
                            <path ref={path}></path>
                        </svg>
                    </div>
                    <div className="flex md:flex-row flex-col md:items-center justify-between gap-y-2 md:gap-y-0 lg:h-[50px] h-fit">
                        <div className="flex items-center gap-x-6 2xl:text-5xl xl:text-4xl text-xl md:text-2xl lg:text-3xl">
                            <p className="font-[400]">email</p>
                            <p onClick={loading === false ? handleCopyText : ""} ref={emailClickRef} className={`font-extralight tracking-tighter list ${loading ? "" : `${isTouchDevice ? "" : "hover:scale-[1.05] transition-all active:opacity-30 duration-300"}`}`}>{loading ? <span className="opacity-0 -translate-x-10 copied text-primary">copied to clipboard!</span> : <input readOnly={true} className="select-none outline-none w-fit h-fit bg-transparent" type="text" value="hello@enosintech.dev"  id="emailInput" />  }</p>
                        </div>
                        <div className="flex gap-x-3 font-[200] tracking-tighter md:font-semibold text-[14px] md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                            <a href="https://www.linkedin.com/in/enosintech/" target={"_blank"} className={`flex items-center gap-x-1 ${isTouchDevice ? "" : "hover-action navlink"}`}>
                                <p>linkedin</p>
                                <Image 
                                    src="/icons/arrow.png"
                                    alt="small link arrow"
                                    width={32}
                                    height={32}
                                    className="invert size-4 sm:size-5 xl:size-6 2xl:size-8 -rotate-45"
                                />
                            </a>
                            <a href="https://github.com/enosintech" target={"_blank"} className={`flex items-center gap-x-1 ${isTouchDevice ? "" : "hover-action navlink"}`}>
                                <p>github</p>
                                <Image 
                                    src="/icons/arrow.png"
                                    alt="small link arrow"
                                    width={32}
                                    height={32}
                                    className="invert size-4 sm:size-5 xl:size-6 2xl:size-8 -rotate-45"
                                />
                            </a> 
                            <a href="https://read.cv/enosintech" target={"_blank"} className={`flex items-center gap-x-1 ${isTouchDevice ? "" : "hover-action navlink"}`}>
                                <p>read.cv</p>
                                <Image 
                                    src="/icons/arrow.png"
                                    alt="small link arrow"
                                    width={32}
                                    height={32}
                                    className="invert size-4 sm:size-5 xl:size-6 2xl:size-8 -rotate-45"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[40%] relative flex items-end justify-between pb-5 sm:text-lg">
                <div className="flex flex-col absolute top-8 md:hidden text-[14px] tracking-tighter font-medium">
                    <p>available for fulltime</p>
                    <p>and freelance roles</p>
                </div>
                <p className="tracking-tight font-black"><span className="font-light">©</span> {new Date().getFullYear()} ENOSINTECH</p>
                <p className="tracking-tighter hidden md:block">AVAILABLE FOR FULL TIME AND FREELANCE ROLES</p>
                <p onClick={handleBackToTop} className={`${isTouchDevice ? "" : "navlink hover-action" }`}><span className="text-primary">[</span> back to top <span className="text-primary">]</span></p>
            </div>
        </div>
    </>
  )
}

export default Contact;
