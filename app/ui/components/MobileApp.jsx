import { FontGrotesque } from "@/app/utils/fonts";

const MobileApp = () => {
    return (
      <div className="w-full h-full flex flex-col gap-y-2">
        <div className="w-full h-[65%] rounded-[8px] lg:rounded-[12px] bg-green-500"></div>
        <div className="w-full h-[35%] rounded-[8px] lg:rounded-[12px] lg:border border-2 border-white flex flex-col gap-y-2 relative p-5 px-3">
          <p className={`${FontGrotesque.className} leading-none max-[490px]:text-[11vw] text-[6vw] md:text-[5vw] lg:text-[2.2vw] xl:text-[4vw]`}>banturide</p>
          <div className="flex items-center justify-start gap-x-3">
            <div className="bg-zinc-800 rounded-full px-2 p-1">
              <p className="font-semibold tracking-tight text-[0.8rem]">MOBILE</p>
            </div>
            <div className="bg-primary rounded-full px-2 p-1 text-black">
              <p className="font-bold tracking-tight text-[0.8rem]">CLIENT</p>
            </div>
          </div>
          <div className="absolute bottom-3 left-3">
            <p className="font-extralight text-[2vw] md:text-[0.75vw] text-zinc-300 tracking-tight">MOBILE APP DEVELOPMENT</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default MobileApp;
