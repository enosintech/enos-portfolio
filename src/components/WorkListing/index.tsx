import { NohemiBold } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const WorkListing = () => {
  return (
        <div className='w-full h-[85%] flex flex-col'>
          <div className="w-full h-[10%] flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-500">PROJECT</p>
              <p className="lg:text-base text-sm">Makeupbyram</p>
            </div>

            <div className="lg:block hidden">
              <p className="text-xs text-neutral-500">SERVICE</p>
              <p>Web Design & Development</p>
            </div>

            <div className="lg:block hidden">
              <p className="text-xs text-neutral-500">YEAR</p>
              <p>2024</p>
            </div>

            <a target="_blank" href="#" className="flex items-center actionable group">
              <p className={cn("group-hover:underline transition-all", NohemiBold.className)}>Visit Live Website</p>
              <ArrowUpRight />
            </a>

          </div>

          <div className='w-full h-[90%] gap-1 flex lg:flex-row flex-col'>
            <div className="lg:w-[80%] w-full lg:h-full h-[65%] flex items-center justify-center">
              <div className="max-w-full w-fit h-fit max-h-full rounded-[5px] md:rounded-[6px] overflow-hidden deep-shadow">
                <video id="video" className='w-full h-full object-contain' autoPlay={true} loop={true} controls={false} playsInline={true} muted={true}>
                  <source src={"/videos/makeupbyram.mp4"} type="video/mp4"/>
                </video>
              </div>
            </div>
            <div className="lg:w-[20%] w-full lg:h-full h-[35%] flex lg:flex-col flex-wrap justify-between px-1 lg:items-end">
              <div className="lg:text-right lg:hidden lg:w-fit w-1/2">
                <p className="text-xs text-neutral-500">SERVICE</p>
                <p className="text-sm mt-1">Web Design & Development</p>
              </div>
              <div className="text-right lg:hidden lg:w-fit w-1/2">
                <p className="text-xs text-neutral-500">YEAR</p>
                <p className="text-sm mt-1">2024</p>
              </div>
              <div className="lg:block hidden"></div>
              <div className="lg:text-right lg:h-fit h-1/2 flex flex-col justify-end lg:block">
                <p className="text-neutral-500 text-xs">Type</p>
                <p className="text-sm mt-1">Portfolio</p>
              </div>
              <div className="text-right lg:h-fit h-1/2 flex flex-col justify-end lg:block">
                <p className="text-neutral-500 text-xs">Tech</p>

                <div className={cn("text-sm mt-1")}>
                  <p>Next.JS</p>
                  <p>Tailwind CSS</p>
                  <p>GSAP</p>
                </div>
              </div>
            </div>
          </div>

        </div>
  )
}

export default WorkListing;
