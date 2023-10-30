import clsx from "clsx";
import React, { useEffect, useState } from "react";

import roomImage1 from "/public/assets/images/jahawi-images/room-1.jpg";
import roomImage2 from "/public/assets/images/jahawi-images/room-2.jpg";
import roomImage3 from "/public/assets/images/jahawi-images/room-3.jpg";
import roomImage4 from "/public/assets/images/jahawi-images/room-4.jpg";
import roomImage5 from "/public/assets/images/room-5.png";
import roomImage6 from "/public/assets/images/room-6.png";
import roomImage7 from "/public/assets/images/room-7.png";
import Image from "next/image";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";

// Import Swiper
import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Container from "./container/Container";
import { useTheme } from "next-themes";
import Link from "next/link";

const Rooms = () => {
  const roomsData = [
    {
      imageSrc: roomImage1,
      title: "Superior Room",
      beds: 2,
      bathrooms: 1,
    },
    {
      imageSrc: roomImage2,
      title: "Superior Room",
      beds: 3,
      bathrooms: 1,
    },
    {
      imageSrc: roomImage3,
      title: "Superior Room",
      beds: 3,
      bathrooms: 1,
    },
    {
      imageSrc: roomImage4,
      title: "Superior Room",
      beds: 3,
      bathrooms: 1,
    },
  ];

  const { theme, setTheme } = useTheme();

  let roomsCount = parseFloat(roomsData.length);

  let [Index, setIndex] = useState(1);

  let [carouselProgress, setCarouselProgress] = useState(15);

  useEffect(() => {
    let screenWidth = window.innerWidth;
    if (screenWidth >= 1138) {
      setCarouselProgress(((Index + 3) / roomsCount) * 100);
    }
  }, [Index, roomsCount]);

  return (
    <>
      <section
        className={clsx(
          "relative overflow-hidden pt-20 lg:pt-[120px] pb-10 lg:pb-20 h-full  border-b  border-slate-200/80",
          theme === "dark" ? "bg-[#041434]" : "bg-[#F3F4F6]"
        )}
      >
        <h2 className="font-display  text-center text-4xl font-semibold text-slate-900 sm:text-5xl">
          Our Beautiful Rooms
        </h2>

        <div className="py-2 grid justify-center md:grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8 my-12 mx-6 ">
          {roomsData.map((room, roomIndex) => (
            <div
              key={roomIndex}
              className={clsx(
                "  h-full w-full rounded-xl p-6  overflow-hidden shadow-lg hover:shadow-xl",
                theme === "dark" ? "bg-[#F3F4F6]" : "bg-[#F3F4F6]"
              )}
            >
              <Image
                className="h-72 w-full md:w-full rounded-md object-cover bg-slate-100 transition duration-300 group-hover:scale-105"
                src={room.imageSrc}
                width={400}
                height={400}
                alt="Property Image"
              />
              <div className="px-6 py-4">
                <div className="my-8">
                  <h2 className="text-center md:text-left text-2xl font-bold text-gray-900">
                    {room.title}
                  </h2>
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
                <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 justify-between">
                  <div className="flex items-center">
                    <MdOutlineBedroomParent size={40} />
                    <p className="ml-3 text-2xl  font-medium text-gray-700">
                      {room.beds} Beds
                    </p>
                  </div>
                  <div className="flex items-center">
                    <GiBathtub size={40} />
                    <p className="ml-3 text-2xl   font-medium text-gray-700">
                      {room.bathrooms}{" "}
                      {room.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
                    </p>
                  </div>
                </div>
                <div className=" my-16 flex flex-col space-y-8 sm:flex-row justify-between items-center sm:space-x-12 sm:space-y-0">
                  <Link
                    href="/accommodation"
                    class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                  >
                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-center text-xl text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Explore
                    </span>
                  </Link>

                  <Link
                    href="#_"
                    class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                  >
                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-center text-xl text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Book Now
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Rooms;
