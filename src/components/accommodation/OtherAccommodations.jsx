import React, { useState, useEffect } from "react";
import roomImage1 from "/public/assets/images/jahawi-images/room-1.webp";
import roomImage2 from "/public/assets/images/jahawi-images/room-2.webp";
import roomImage3 from "/public/assets/images/jahawi-images/room-3.webp";
import roomImage4 from "/public/assets/images/jahawi-images/room-4.webp";
import roomImage5 from "/public/assets/images/jahawi-images/room-5.webp";
import Image from "next/image";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";

// Import Swiper
import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Container } from "../Container";
import { useTheme } from "next-themes";
import Link from "next/link";

const OtherAccommodations = () => {
  const roomsData = [
    {
      id: 1,
      imageSrc: roomImage1,
      title: "Single's Room",
      beds: 1,
      bathrooms: 1,
      description:
        "Offering perfect blend of contemporary aesthetics and coastal ambiance",
    },
    {
      id: 2,
      imageSrc: roomImage2,
      title: "Friends Room ",
      beds: 2,
      bathrooms: 1,
      description:
        "Offering perfect blend of contemporary aesthetics and coastal ambiance",
    },
    {
      id: 3,
      imageSrc: roomImage3,
      title: "Family Room",
      beds: 3,
      bathrooms: 1,
      description:
        "Offering perfect blend of contemporary aesthetics and coastal ambiance For Your Family",
    },
    {
      id: 4,
      imageSrc: roomImage4,
      title: "Couples Room",
      beds: 1,
      bathrooms: 1,
      description:
        "Offering perfect blend of contemporary aesthetics and coastal ambiance",
    },

    {
      id: 5,
      imageSrc: roomImage5,
      title: " 2 Beds",
      beds: 2,
      bathrooms: 2,
      description: "Spacious 2 Beds ",
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
    <div className="relative mt-8 lg:mt-24  max-w-full">
      <Container className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".carousel-next",
            prevEl: ".carousel-prev",
          }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 3500,
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView="auto"
          grabCursor={true}
          centeredSlides={false}
          initialSlide={0}
          onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
          className="mySwiper !overflow-visible h-[56rem] w-screen relative"
        >
          {roomsData.map((room, roomIndex) => (
            <SwiperSlide
              key={`room-${roomIndex}`}
              className=" bg-cover bg-center bg-no-repeat  swiper-slide w-full overflow-hidden"
              style={{ backgroundImage: `url(${room.imageSrc.src})` }}
            >
              <div className="w-full ml-12  flex flex-col my-8 justify-between absolute items-start overflow-hidden  bottom-0">
                <p className="text-4xl mx-12  lg:px-0 text-white">
                  {room.description}
                </p>

                <div className="w-1/2  space-x-4  space-y-4 text-center flex flex-col lg:space-y-0 lg:flex-row my-8 justify-between items-center">
                  <Link
                    href={`/accommodation/[id]`}
                    as={`/accommodation/${room.id}`}
                    aria-label="Single Project"
                    passHref
                    className="relative rounded-md  inline-flex items-center  py-6 px-14 text-3xl border-4 border-[#fff]  text-white overflow-hidden transition-all  bg-transparent  hover:bg-[#4a576E] group"
                  >
                    <span className=" w-48 h-48 rounded rotate-[-40deg] bg-transparent absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-2xl md:text-4xl text-center text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                      Explore
                    </span>
                  </Link>

                  <Link
                    href="#"
                    className="relative rounded-md  inline-flex items-center  py-6 px-14 text-3xl border-4 border-[#fff]  text-white overflow-hidden transition-all  bg-transparent  hover:bg-[#4a576E] group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-transparent absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-2xl md:text-4xl text-bold text-center text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                      Enquire
                    </span>
                  </Link>

                  <Link
                    href="#"
                    className="relative rounded-md  inline-flex items-center  py-6 px-14 text-3xl border-4 border-[#fff]  text-white overflow-hidden transition-all  bg-transparent  hover:bg-[#4a576E] group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-transparent absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-2xl md:text-4xl text-bold text-center text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                      Book{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default OtherAccommodations;
