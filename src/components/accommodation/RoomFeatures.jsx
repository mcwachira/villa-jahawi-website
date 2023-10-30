import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsPeopleFill } from "react-icons/bs";
import { Container } from "../Container";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";

import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({
  weight: "700",
  subsets: ["latin"],
});

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Rooms from "../../pages/accommodation";
import OtherAccommodations from "./OtherAccommodations";

const RoomFeatures = ({ room }) => {
  const { theme, setTheme } = useTheme();
  console.log(room);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <section
        className={clsx("relative bg-cover bg-center bg-no-repeat")}
        style={{ backgroundImage: `url(${room?.image})` }}
      >
        <div className="absolute inset-0 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl  px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          {/* sm:max-w-lg */}
          <div className="w-full  text-center ltr:sm:text-left rtl:sm:text-right">
            <h1
              className={`${dancingScript.className}
     text-center font-display text-6xl font-semibold text-[#7c6a467]
      sm:text-6xl lg:text-left my-12 text-white`}
            >
              Villa Jahawi
            </h1>
            <h2 className=" my-4 text-4xl font-extrabold text-center sm:text-5xl  lg:text-left text-white">
              Every Moment feels like the first time
              {/* 
        <strong className="block font-extrabold text-rose-700">
        Villa Jahawi.
        </strong> */}
            </h2>

            {/* <p className="mt-4 max-w-lg sm:text-xl/relaxed">
      Every Moment feels like the first time Villa Jahawi
      </p> */}

            <div className="mt-8 flex flex-wrap gap-4 text-center  justify-center items-center lg:justify-start">
              <Link
                href="#"
                className="block w-3/4 rounded bg-[#4a576E] my-8 px-14 py-6  sm:px-12 sm:py-4 text-2xl font-medium text-white shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div
        className={clsx(
          "pb-20 w-full ",
          theme === "dark" ? "bg-[#041434]" : "bg-white"
        )}
        id="#section1"
      >
        <div className="mt-20  w-full">
          <Container>
            <div className="flex flex-col items-center">
              <h2 className="relative text-4xl text-center overflow-visible mb-6  text-gray-500 capitalize font-semibold  ">
                {" "}
                {room?.title}
              </h2>

              <h2 className="relative text-center overflow-visible mb-0 pr-2  text-[#4a576E] text-6xl capitalize font-semibold  ">
                {room?.subTitle}
              </h2>

              <p className="text-2xl text-center my-4">{room?.description}</p>

              <div className=" w-full  sm:w-2/3 my-8 flex justify-between items-center space-x-12">
                <div className="flex items-center">
                  <BsPeopleFill size={60} color="#4a576E" />
                  <p className="ml-2 text-2xl  font-medium text-gray-700">
                    {room?.numberOfPeople} people
                  </p>
                </div>

                <div className="flex items-center">
                  <MdOutlineBedroomParent size={40} />
                  <p className="ml-3 text-2xl  font-medium text-gray-700">
                    {room?.numberOfBeds} Beds
                  </p>
                </div>

                <div className="flex items-center">
                  <GiBathtub size={40} />
                  <p className="ml-3 text-2xl   font-medium text-gray-700">
                    {room.numberOfBathrooms}{" "}
                    {room.numberOfBathrooms === 1 ? "Bathroom" : "Bathrooms"}
                  </p>
                </div>
              </div>

              <div
                className="w-2/3  my-16 flex justify-between items-center space-x-8
      "
              >
                <Link
                  href={`/accommodation/[id]`}
                  as={`/accommodation/${room.id}`}
                  aria-label="Single Project"
                  passHref
                  class="relative rounded-md  inline-flex items-center justify-start py-4 px-8 text-4xl border-2 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                >
                  <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Virtual Tour
                  </span>
                </Link>

                <Link
                  href="#"
                  class="relative rounded-md  inline-flex items-center justify-start py-4 px-8 text-4xl border-2 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                >
                  <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Enquire
                  </span>
                </Link>

                <Link
                  href="#"
                  class="relative rounded-md  inline-flex items-center justify-start py-4 px-8 text-4xl border-2 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                >
                  <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Book{" "}
                  </span>
                </Link>
              </div>
              <div>
                <p className="text-center text-2xl">
                  *The Virtual Reality Tours relate to specific units at the
                  property at the time of filming and are for illustrative
                  purposes only. All unit types categories are similar in layout
                  and furnishings and individual units within the same
                  categories may differ or vary slightly.
                </p>
              </div>
            </div>
          </Container>
        </div>

        {/* 
        {room?.AccommodationImages.map((roomImage, index) => (
              <SwiperSlide
                key={index}
                // style={{ backgroundImage: `url(${roomImage.img})` }}
              >
                <img
                  src={roomImage.img}
                  alt="image"
                  className=" w-full bg-cover bg-center bg-no-repeat  swiper-slide  absolute  "
                />

))} */}

        <div className=" mt-20 ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper !overflow-visible h-[64rem] w-screen "
          >
            {/* <section
          className={clsx("relative bg-cover bg-center bg-no-repeat")}
          style={{ backgroundImage: `url(${room?.image})` }}
        > */}

            {room?.AccommodationImages.map((roomImage) => (
              <SwiperSlide
                className=" bg-cover bg-center bg-no-repeat  swiper-slide w-full overflow-hidden"
                style={{ backgroundImage: `url(${roomImage.img})` }}
              ></SwiperSlide>
            ))}
          </Swiper>
          ;
        </div>

        <div className="mt-12">
          <h2 className="relative text-center overflow-visible mb-0   text-[#4a576E] text-6xl capitalize font-semibold  ">
            Amenities
          </h2>
          {room.amenities.map((amenities, index) => (
            <div key={index} className="w-full  ">
              <p className="ml-10 flex flex-row text-3xl border-1 border-r-2 border-[#4a576e] ">
                {amenities}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Container>
        <div className="flex flex-col items-center">
          <h2 className="relative text-4xl text-center overflow-visible  mb-6   text-gray-500 capitalize font-semibold  ">
            OTHER ACCOMMODATIONS
          </h2>
        </div>

        <OtherAccommodations />

        {/* <Rooms /> */}
      </Container>
    </motion.div>
  );
};

export default RoomFeatures;
