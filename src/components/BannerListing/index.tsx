import { NohemiLight, NohemiMedium } from '@/lib/fonts';
import { cn } from '@/lib/utils';

const BannerListing = ({ title, description} : { title: string, description: string }) => {

  return (
    <div className='w-full h-full flex border-b-2 border-white'>
        <div className='w-full h-full flex flex-col justify-evenly'>
          <p className={cn("text-3xl sm:text-4xl lg:text-6xl", NohemiMedium.className)}>{title}</p>
          <p className={cn("text-lg md:text-2xl lg:text-3xl max-w-[95%] lg:max-w-[80%] text-justify", NohemiLight.className)}>{description}</p>
        </div>
    </div>
  )
}

export default BannerListing;
