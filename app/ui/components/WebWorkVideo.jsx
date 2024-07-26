"use client";

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Image from 'next/image';

import { triggerToAnimations } from '@/app/utils/animations';

const WebWorkVideo = (props) => {

  const videoRef = useRef([]);

  useGSAP(() => {

    triggerToAnimations("#video", {
    }, {
      trigger: videoRef.current[props.id],
      start: "top bottom",
      end: "top top",
      toggleActions: "play none none reverse",
      onEnter: () => {
        videoRef.current[props.id].play();
      },
      onLeave: () => {
        videoRef.current[props.id].pause();
      },
      onEnterBack: () => {
        videoRef.current[props.id].play();
      },
      onLeaveBack: () => {
        videoRef.current[props.id].pause();
      }
    })
  }, [])

  return (
    <div className='w-full h-full rounded-[8px] lg:rounded-[12px] overflow-hidden relative'>
      <div className='w-10 h-10 md:w-14 md:h-14 xl:w-20 xl:h-20 rounded-full absolute top-3 right-2 backdrop-blur-sm deep-shadow list bg-[rgba(0,0,0,0.5)] z-10 grid place-items-center'>
        <Image 
            src="/icons/arrow.png"
            alt="a link arrow"
            width={40}
            height={40}
            className="invert size-5 md:size-8 xl:size-10 -rotate-45"
        />
      </div>
      <video key={props.video} ref={(el) => (videoRef.current[props.id] = el)} id="video" className='w-full h-full object-cover' loop={true} controls={false} playsInline={true} muted={true}>
        <source src={props.video} type="video/mp4"/>
      </video>
    </div>
  )
}

export default WebWorkVideo;
