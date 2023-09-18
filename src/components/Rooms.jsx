import clsx from 'clsx'
import React, { useEffect, useState } from "react";

import roomImage1 from '/public/assets/images/room-1.png'
import  roomImage2 from '/public/assets/images/room-2.png'
import roomImage3 from '/public/assets/images/room-3.png'
import roomImage4 from '/public/assets/images/room-4.png'
import  roomImage5 from '/public/assets/images/room-5.png'
import  roomImage6 from '/public/assets/images/room-6.png'
import  roomImage7 from '/public/assets/images/room-7.png'
import Image from "next/image";
import {MdOutlineBedroomParent} from 'react-icons/md'
import {GiBathtub} from 'react-icons/gi'

// Import Swiper
import { Navigation, Autoplay } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import Container from "./container/Container";
import { useTheme } from 'next-themes';
import Link from 'next/link';

const Rooms = () => {

    const roomsData = [
        {
          imageSrc:roomImage1 ,
          title: 'Superior Room',
          bedrooms:2,
          bathrooms:2
          
        },
        {
          imageSrc:roomImage2 ,
          title: 'Superior Room',
          bedrooms:3,
          bathrooms:2
       
        },
        {
          imageSrc:roomImage7 ,
          title: 'Superior Room',
          bedrooms:3,
          bathrooms:2
       
        },
        {
          imageSrc:roomImage4 ,
          title: 'Superior Room',
          bedrooms:3,
          bathrooms:2
       
        },
         {
          imageSrc:roomImage5 ,
          title: 'Superior Room',
          bedrooms:3,
          bathrooms:2
       
        },
        {
          imageSrc:roomImage6 ,
          title: 'Superior Room',
          bedrooms:4,
          bathrooms:3
       
        },
        {
          imageSrc:roomImage7 ,
          title: 'Superior Room',
          bedrooms:4,
          bathrooms:2
       
        },
      
      ]


      const {theme, setTheme} = useTheme();

    let roomsCount = parseFloat(roomsData.length)

    let [Index, setIndex] = useState(1)
  
    let [carouselProgress, setCarouselProgress] = useState(15)
  



    
    useEffect(() => {
  
      let screenWidth = window.innerWidth
      if(screenWidth >= 1138){
        setCarouselProgress(((Index + 3) / roomsCount) * 100)
      }
    }, [Index, roomsCount])


  return (
    <>
 <section className={clsx("relative overflow-hidden pt-20 lg:pt-[120px] pb-10 lg:pb-20 h-full  border-b  border-slate-200/80",  theme==='dark' ? "bg-[#1D1E30]" :"bg-[#F3F4F6]")} >


      <Container className="relative">
<div className="mx-auto grid max-w-xl gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-16">
  <div>
    <h2 className="font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
    Our Beautiful Rooms
    </h2>
   </div>
</div>
</Container>

<div className="relative mt-8 lg:mt-24">
<Container className="relative">
  <Swiper
    modules={[Navigation, Autoplay]}
    navigation={{ nextEl: '.carousel-next', prevEl: '.carousel-prev' }}
    scrollbar={{ draggable: true }}
    autoplay={{
      delay: 2500,

    }}
    loop={true}
    spaceBetween={0}
    slidesPerView="auto"
    grabCursor={true}
    centeredSlides={false}
    initialSlide={0}
    onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
    className="!overflow-visible"
  >

<div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {roomsData.map((room , roomIndex) => <>
            
        <SwiperSlide
          key={`room-${roomIndex}`}
          className="swiper-slide !h-auto !w-auto shrink-0 p-10 "
        >
            
            
                <div key={roomIndex} className="  h-full w-ful rounded-xl p-6  overflow-hidden shadow-lg hover:shadow-xl bg-white ">
      <Image   className="h-72 w-full rounded-md object-cover bg-slate-100 transition duration-300 group-hover:scale-105"
        src={room.imageSrc}
             width={400}
             height={400}    
             alt="Property Image"/>
     <div className="px-6 py-4">
    <div className="my-8">
      <h2 className="text-2xl font-bold text-gray-900">{room.title}</h2>
      <div className="flex items-center">
      <div className="flex gap-0.5">
                {[...Array(5)].map((i, n) => (
                  <svg
                    key={`room-${roomIndex}-star-${n}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 text-red-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
      </div>
    </div>
    <div className="flex justify-between">
      <div className="flex items-center">
          <MdOutlineBedroomParent size={40} />
        <p className="ml-2 text-lg  font-medium text-gray-700">{room.bedrooms} Bedrooms</p>
      </div>
      <div className="flex items-center">
          <GiBathtub size={40} />
        <p className="ml-2 text-lg  font-medium text-gray-700">{room.bathrooms} Bathrooms</p>
      </div>
      
    </div>
    <div className=" my-16 flex justify-between items-center space-x-12g
    ">
<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Explore</span>
</Link>



<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Book Now</span>
</Link>
    </div>
  </div>
      </div>
      </SwiperSlide>
            </>)}
</div>
  </Swiper>
      
   </Container>

         
        </div>
    
      </section>
    </>
  );
};

export default Rooms;


     