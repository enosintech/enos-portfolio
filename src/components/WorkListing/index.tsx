import { NohemiBold, NohemiLight, NohemiSemiBold } from "@/lib/fonts";
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
            <div className="lg:w-[60%] w-full lg:h-full h-[50%] flex items-center justify-center">
              <div className="max-w-full w-fit h-fit max-h-full rounded-[5px] md:rounded-[6px] overflow-hidden deep-shadow">
                <video id="video" className='w-full h-full object-contain' autoPlay={true} loop={true} controls={false} playsInline={true} muted={true}>
                  <source src={"/videos/makeupbyram.mp4"} type="video/mp4"/>
                </video>
              </div>
            </div>
            <div className="lg:w-[40%] w-full lg:h-full h-[50%] flex flex-col justify-between px-1 py-2 lg:py-12 items-end">
              <p className={cn("xl:max-w-[80%] text-justify lg:text-right text-sm sm:text-base md:text-lg lg:text-sm lg:max-w-[60%]", NohemiLight.className)}>Makeupbyram is a Kuala Lumpur-based makeup artist specializing in bold, creative shoot makeup, high-fashion runway looks, and edgy, statement-making styles.</p>
              <div className="text-right">
                <p className="text-neutral-500 text-xs">Tech</p>

                <div className={cn("md:text-sm text-xs mt-1", NohemiSemiBold.className)}>
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
