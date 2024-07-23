import { useRef } from "react";
import Image from "next/image";

import { noTriggerToAnimations } from "@/app/utils/animations";

let isTouchDevice;

if(typeof window !== "undefined"){
    isTouchDevice = "ontouchstart" in window; 
} else {
    isTouchDevice;
}

const ProcessList = (props) => {

  const processHoverRef = useRef([]);

  return (
    <div onClick={() => {
        if(props.enlarged === props.index){
            props.handleSetEnlarged(null)
        } else {
            props.handleSetEnlarged(props.index)
        }
    }} className={`w-[90%] max-[499px]:w-full ${props.enlarged === props.index ? "h-1/2" : "h-1/4"} border-t-2 border-white navlink transition-all duration-300`}>
      {props.enlarged === props.index
        ? 
        <div className="w-full h-full flex flex-col relative list">
            <div className="w-full h-[40%] flex items-center justify-between">
                <div className="relative w-fit h-fit">
                  <span className="absolute -right-6 top-0 lg:text-xl tracking-tighter font-light">{"0" + (props.index + 1)}</span>
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tighter">{props.name}</p>
                </div>
                <Image 
                    src="/icons/boldArrow.webp"
                    alt="a bold arrow icon"
                    width={40}
                    height={40}
                    className="invert size-10 lg:size-14 -rotate-90"
                />
            </div>
            <div className="w-full h-[60%] flex items-center">
                <p className={`max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] 2xl:max-w-[40%] text-[12px] md:text-[14px] xl:text-[14px] 2xl:text-[16px] font-light tracking-tight`}>{props.text}</p>
            </div>
        </div>
        :
        <div onMouseEnter={() => {
          if(isTouchDevice){
            return;
          }

          noTriggerToAnimations(processHoverRef.current[props.index], {
            opacity: 1,
            xPercent: -50
          })
        }} onMouseLeave={() => {

          if(isTouchDevice){
            return;
          }

          noTriggerToAnimations(processHoverRef.current[props.index], {
            opacity: 0,
            xPercent: 50,
          })
          
          
        }} onMouseMove={(e) => {
          if(isTouchDevice){
            return;
          }

          noTriggerToAnimations(processHoverRef.current[props.index], {
            duration: 0.5,
            x: e.clientX,
          })

        }} className="w-full h-full flex items-center justify-between relative group list">
            <div className="relative w-fit h-fit">
              <span className="absolute -right-6 top-0 lg:text-xl tracking-tighter font-light">{"0" + (props.index + 1)}</span>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tighter">{props.name}</p>
            </div>
            <Image 
                src="/icons/boldArrow.webp"
                alt=""
                width={100}
                height={100}
                className={`invert size-10 lg:size-14 rotate-45 ${isTouchDevice ? "" : "group-hover:rotate-0 transition-all duration-300" }`}
             />
            {!isTouchDevice &&
              <div ref={(el) => (processHoverRef.current[props.index] = el)} className={`bg-red-500 top-0 bottom-0 my-auto deep-shadow w-[30%] sm:w-[20%] lg:w-[18%] xl:w-[15%] h-[120%] sm:h-[140%] md:h-[160%] lg:h-[180%] xl:h-[200%] absolute z-20 opacity-0 rounded-[10px] overflow-hidden appearProcess pointer-events-none`}>
                  <Image 
                    src=""
                    alt=""
                    width={100}
                    height={100}
                    className="w-full h-full object-cover opacity-0"
                  />
              </div>
            }
        </div>
      }
    </div>
  )
}

export default ProcessList;
