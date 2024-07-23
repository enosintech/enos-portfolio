const WebWorkDesc = (props) => {
    return (
      <div className="w-full h-full border-2 lg:border border-white rounded-[8px] overflow-hidden lg:rounded-[12px] flex lg:flex-col lg:items-end justify-between py-3 lg:text-right pr-3 relative">
        <div className="flex flex-col lg:items-end gap-y-3 lg:gap-y-5 pl-3">
          <div className="flex flex-col items-start lg:items-end max-[490px]:text-[11vw] text-[6vw] md:text-[5vw] lg:text-[2.2vw] xl:text-[2.4vw] leading-none font-[500]">
            <p className="tracking-tight">{props.name}</p>
            <p className="tracking-tight">{props.secondName}</p>
          </div>
          <p className="tracking-tight font-[300] max-[490px]:text-[4vw] text-[3vw] md:text-[2vw] lg:text-[1.4vw] xl:text-[1.2vw] max-w-full lg:max-w-[80%] xl:max-w-full">{props.text}</p>
        </div>
        
        <div className="hidden lg:block">
          <p className="font-extralight lg:text-[0.75vw] text-zinc-300 stretch font-sans">{props.category}</p>
        </div>
        <div className="block lg:hidden absolute bottom-3 left-3">
          <p className="font-extralight text-[2vw] md:text-[1.5vw] text-zinc-300 stretch font-sans">{props.category}</p>
        </div>
      </div>
    )
  }
  
  export default WebWorkDesc;
