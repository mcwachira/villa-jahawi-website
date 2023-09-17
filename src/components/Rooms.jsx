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
import { Navigation } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Container from "./container/Container";
import { useTheme } from 'next-themes';

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
    <div className="mt-10 hidden h-[10px] w-full rounded-full bg-gray-300 lg:mt-16 lg:block">
              <div
                className="h-full rounded-full bg-gray-500 duration-200"
                style={{ width: `${carouselProgress}%` }}
              ></div>
            </div>
          </div> 
  <div className="lg:ml-auto lg:max-w-sm">

    <div className="mt-14 flex gap-2.5 lg:mt-12">
      <button className="carousel-prev inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-sm shadow-sky-200/75 ring-1 ring-slate-200/60 duration-200 hover:bg-sky-50/50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-6 w-6 text-sky-700/70"
        >
          <path
            fillRule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button className="carousel-next inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-sm shadow-sky-200/75 ring-1 ring-slate-200/60 duration-200 hover:bg-sky-50/50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-6 w-6 text-sky-700/70"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</div>
</Container>

<div className="relative mt-8 lg:mt-24">
<Container className="relative">
  <Swiper
    modules={[Navigation]}
    navigation={{ nextEl: '.carousel-next', prevEl: '.carousel-prev' }}
    scrollbar={{ draggable: true }}
    spaceBetween={0}
    slidesPerView="auto"
    grabCursor={true}
    loop={false}
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
            
            
                <div key={roomIndex} className="  h-full w-full rounded-xl p-6  overflow-hidden shadow-lg hover:shadow-xl bg-white ">
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
    <div className="my-12 flex justify-between items-center">

        <button   className="ease-in-up  rounded-md bg-[#7c6a46] py-3 px-8 text-xl font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9">
            Book Now 
        </button>
        <p className="text-3xl font-extrabold text-black">$300</p>
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


     