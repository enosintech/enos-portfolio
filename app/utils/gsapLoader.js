import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

if(typeof window !== "undefined"){
    gsap.registerPlugin(ScrollTrigger);
}

ScrollTrigger.normalizeScroll(true);

export {gsap, ScrollTrigger};