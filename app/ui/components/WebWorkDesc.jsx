import { FontGrotesque } from "@/app/utils/fonts";

const WebWorkDesc = (props) => {
    return (
      <div className="w-full h-full border-2 border-white rounded-[8px] overflow-hidden lg:rounded-[12px] flex lg:flex-col lg:items-end justify-between py-5 lg:text-right pr-3 relative">
        <div className="flex flex-col lg:items-end gap-y-3 lg:gap-y-5 pl-3">
          <div className={`${FontGrotesque.className} flex flex-col items-start lg:items-end max-[490px]:text-[11vw] text-[6vw] md:text-[5vw] lg:text-[2.2vw] xl:text-[4vw] leading-none tracking-normal uppercase`}>
            <p>{props.name}</p>
            <p>{props.secondName}</p>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="bg-zinc-800 rounded-full px-2 p-1">
              <p className="font-semibold tracking-tight text-[0.8rem]">WEB</p>
            </div>
            <div className="bg-primary rounded-full px-2 p-1 text-black">
              <p className="font-bold tracking-tight text-[0.8rem]">{props.text}</p>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block">
          <p className="font-extralight lg:text-[0.75vw] text-zinc-300 stretch font-sans">{props.category}</p>
        </div>
        <div className="block lg:hidden absolute bottom-3 left-3">
          <p className="font-extralight text-[2vw] md:text-[1.5vw] text-zinc-300 tracking-tight">{props.category}</p>
        </div>
      </div>
    )
  }
  
  export default WebWorkDesc;
