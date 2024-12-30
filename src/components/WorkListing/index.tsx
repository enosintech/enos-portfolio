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

          <div className='w-full h-[90%] gap-1 flex md:flex-row flex-col'>
            <div className="md:w-[60%] w-full md:h-full h-[50%] bg-slate-200 flex items-center justify-center">
              <div className="max-w-[90%] w-fit h-fit max-h-[85%] rounded-[5px] md:rounded-[6px] overflow-hidden deep-shadow">
                <video id="video" className='w-full h-full object-contain' autoPlay={true} loop={true} controls={false} playsInline={true} muted={true}>
                  <source src={"/videos/makeupbyram.mp4"} type="video/mp4"/>
                </video>
              </div>
            </div>
            <div className="md:w-[40%] w-full md:h-full h-[50%] bg-slate-200">
             
            </div>
          </div>

        </div>
  )
}

export default WorkListing;
