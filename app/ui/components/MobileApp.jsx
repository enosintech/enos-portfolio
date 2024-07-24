const MobileApp = () => {
    return (
      <div className="w-full h-full flex flex-col gap-y-2">
        <div className="w-full h-[65%] rounded-[8px] lg:rounded-[12px] bg-green-500"></div>
        <div className="w-full h-[35%] rounded-[8px] lg:rounded-[12px] lg:border border-2 border-white flex flex-col gap-y-2 relative p-3">
          <p className="leading-none font-[500] tracking-tight max-[490px]:text-[11vw] text-[6vw] md:text-[5vw] lg:text-[2.2vw] xl:text-[2.4vw]">banturide</p>
          <p className="tracking-tight font-[300] max-[490px]:text-[4vw] text-[3vw] md:text-[2vw] lg:text-[1.4vw] xl:text-[1.2vw]">a ride-hailing mobile application built for iOS and Android for Livingstone, Zambia.</p>
          <div className="absolute bottom-3 left-3">
            <p className="font-extralight text-[2vw] md:text-[0.9vw] text-zinc-300 tracking-tight">MOBILE APP DEVELOPMENT</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default MobileApp;
