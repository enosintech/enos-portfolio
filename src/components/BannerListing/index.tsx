import { NohemiLight, NohemiMedium } from '@/lib/fonts';
import { cn } from '@/lib/utils';

const BannerListing = () => {
  return (
    <div className='w-full h-full flex border-b-2 border-white'>
        <div className='w-[65%] h-full flex flex-col justify-evenly'>
        <p className={cn("text-4xl sm:text-5xl lg:text-7xl xl:text-8xl", NohemiMedium.className)}>Brand Strategy</p>
        <p className={cn("text-lg md:text-2xl lg:text-3xl max-w-full md:max-w-[80%] xl:max-w-[60%]", NohemiLight.className)}>It&apos;s the core of your company&apos;s identity. It guides all business decisions, ensuring a consistent and impactful presence in the market.</p>
        </div>
        <div className='w-[35%] h-full p-2 sm:p-4 pt-10 sm:pt-6 lg:pt-5 lg:p-5'>
        <div className='w-full h-[40%] lg:h-full bg-red-500 rounded-[5px]'></div>
        </div>
    </div>
  )
}

export default BannerListing;
