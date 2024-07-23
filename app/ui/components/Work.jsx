"use client";

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

import { selectedWorks } from '@/app/lib/constantData';

import { FontGrotesque } from '@/app/utils/fonts';

import MobileApp from './MobileApp';
// import SketchVideo from './SketchVideo';
import WebWorkDesc from './WebWorkDesc';
import WebWorkVideo from './WebWorkVideo';

const Work = () => {

    const workSlider = useRef();

    useGSAP(() => {

        let row_width = workSlider.current.getBoundingClientRect().width;
        let row_item_width = workSlider.current.children[0].getBoundingClientRect().width;
        let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;

        gsap.set(workSlider.current, {
            xPercent: `${initial_offset}`
        });

        let duration = 15;

        const tl = gsap.timeline();

        tl.to(workSlider.current, {
            ease: "none",
            duration: duration,
            xPercent: 0,
            repeat: -1
        });

    }, [])

  return (
    <>
        <div className='mt-10 h-[30vh]'>
            <div className='w-full h-fit border-y-4 border-white'>
                <div ref={workSlider} className={`${FontGrotesque.className} w-full h-fit py-4 text-9xl font-grotesk px-3 flex items-center pt-10 gap-x-6 whitespace-nowrap`}>
                    <p>SELECTED PROJECTS</p>
                    <p>SELECTED PROJECTS</p>
                    <p>SELECTED PROJECTS</p>
                    <p>SELECTED PROJECTS</p>
                    <p>SELECTED PROJECTS</p>
                    <p>SELECTED PROJECTS</p>
                    <p>SELECTED PROJECTS</p>
                    <p>SELECTED PROJECTS</p>
                    <p>SELECTED PROJECTS</p>
                    <p>SELECTED PROJECTS</p>
                </div>
            </div>
        </div>
        <div className='flex lg:flex-row flex-col-reverse gap-y-4 lg:gap-x-4 w-full sm:h-[80vh] md:h-[90vh] lg:h-[75vh] h-[55vh] xl:h-[85vh] px-3 mt-6'>
            <div className='lg:w-[20%] w-full lg:h-full h-[45%] md:h-[35%]'>
                <WebWorkDesc {...selectedWorks[0]} />
            </div>
            <div className='lg:w-[80%] w-full h-[55%] md:h-[65%] lg:h-full'>
                <WebWorkVideo {...selectedWorks[0]}/>
            </div>
        </div>
        <div className='flex lg:flex-row flex-col-reverse gap-y-4 lg:gap-x-4 w-full sm:h-[80vh] md:h-[90vh] lg:h-[75vh] h-[55vh] xl:h-[85vh] px-3 mt-6'>
            <div className='lg:w-[20%] w-full lg:h-full h-[45%] md:h-[35%]'>
                <WebWorkDesc {...selectedWorks[1]} />
            </div>
            <div className='lg:w-[80%] w-full h-[55%] md:h-[65%] lg:h-full'>
                <WebWorkVideo {...selectedWorks[1]}/>
            </div>
        </div>
        <div className='flex lg:flex-row flex-col-reverse gap-y-4 lg:gap-x-4 w-full sm:h-[80vh] md:h-[90vh] lg:h-[75vh] h-[55vh] xl:h-[85vh] px-3 mt-6'>
            <div className='lg:w-[20%] w-full lg:h-full h-[45%] md:h-[35%]'>
                <WebWorkDesc {...selectedWorks[2]} />
            </div>
            <div className='lg:w-[80%] w-full h-[55%] md:h-[65%] lg:h-full'>
                <WebWorkVideo {...selectedWorks[2]}/>
            </div>
        </div>
        <div className='flex lg:flex-row flex-col-reverse gap-y-4 lg:gap-x-4 w-full sm:h-[80vh] md:h-[90vh] lg:h-[75vh] h-[55vh] xl:h-[85vh] px-3 mt-6'>
            <div className='lg:w-[20%] w-full lg:h-full h-[45%] md:h-[35%]'>
                <WebWorkDesc {...selectedWorks[4]} />
            </div>
            <div className='lg:w-[80%] w-full h-[55%] md:h-[65%] lg:h-full'>
                <WebWorkVideo {...selectedWorks[4]}/>
            </div>
        </div>
        <div className='w-full h-[90vh] px-3 mt-5 flex gap-x-5 lg:flex-row flex-col'>
            <div className='lg:w-1/2 w-full h-full'>
                <MobileApp />
            </div>
            {/* <div className='lg:w-1/2 w-full h-1/2 lg:h-full'>
                <MobileApp />
            </div> */}
        </div>
        {/* <div className='w-full h-[30vh] md:h-[50vh] lg:h-[60vh] px-3 mt-5 flex gap-x-4'>
            <div className='w-1/2 h-full'>
                <SketchVideo />
            </div>
            <div className='w-1/2 h-full'>
                <SketchVideo />
            </div>
        </div> */}
    </>
  )
}

export default Work;

