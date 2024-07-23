import Image from "next/image";

import { FontGrotesque } from "@/app/utils/fonts";

const Hero = () => {

  return (
    <div className='w-screen h-[100svh] px-3 relative'>
        <div className='w-full h-full relative pt-2'>
            <Image 
                src="/icons/scroll.svg"
                alt="a downward pointing arrow"
                width={160}
                height={160}
                priority={true}
                className="rotate-[135deg] absolute bottom-0 -right-2 translate-x-[110%] opacity-0 scrollImg"
            />
            <div className={`${FontGrotesque.className} -translate-x-[110%] opacity-0 absolute bottom-2 left-0 text-[12vw] leading-none heroText`}>
                <p>CREATIVE</p>
                <p>DEVELOPER</p>
            </div>
        </div>
    </div>
  )
}

export default Hero;