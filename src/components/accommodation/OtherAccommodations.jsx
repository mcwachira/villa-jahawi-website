import React, { useState, useEffect } from "react";
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
import { Container } from "../Container";
import { useTheme } from "next-themes";
import Link from "next/link";

const OtherAccommodations = () => {
  const roomsData = [
    {
      id: 1,
      imageSrc: roomImage1,
      title: "Superior Room",
      beds: 2,
      bathrooms: 1,
      description:
        "Offering perfect blend of contemporary aesthetics and coastal ambiance",
    },
    {
      id: 2,
      imageSrc: roomImage2,
      title: "Superior Room",
      beds: 3,
      bathrooms: 1,
      description:
        "Offering perfect blend of contemporary aesthetics and coastal ambiance",
    },
    {
      id: 3,
      imageSrc: roomImage3,
      title: "Superior Room",
      beds: 3,
      bathrooms: 1,
      description:
        "Offering perfect blend of contemporary aesthetics and coastal ambiance",
    },
    {
      id: 4,
      imageSrc: roomImage4,
      title: "Superior Room",
      beds: 3,
      bathrooms: 1,
      description:
        "Offering perfect blend of contemporary aesthetics and coastal ambiance",
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
    <div className="relative mt-8 lg:mt-24">
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
              <div className="w-3/4 ml-12  flex flex-col my-8 justify-between absolute items-start   bottom-0">
                <p className="text-4xl text-white">{room.description}</p>

                <div className="w-1/2  space-x-4  flex  my-8 justify-between items-center">
                  <Link
                    href={`/accommodation/[id]`}
                    as={`/accommodation/${room.id}`}
                    aria-label="Single Project"
                    passHref
                    class="relative rounded-md  inline-flex items-center justify-start py-8 px-14 text-3xl border-4 border-[#fff]  text-white overflow-hidden transition-all  bg-transparent  hover:bg-[#4a576E] group"
                  >
                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-transparent absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-4xl text-center text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                      Explore
                    </span>
                  </Link>

                  <Link
                    href="#"
                    class="relative rounded-md  inline-flex items-center justify-start py-8 px-14 text-3xl border-4 border-[#fff]  text-white overflow-hidden transition-all  bg-transparent  hover:bg-[#4a576E] group"
                  >
                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-transparent absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-4xl text-center text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                      Enquire
                    </span>
                  </Link>

                  <Link
                    href="#"
                    class="relative rounded-md  inline-flex items-center justify-start py-8 px-14 text-3xl border-4 border-[#fff]  text-white overflow-hidden transition-all  bg-transparent  hover:bg-[#4a576E] group"
                  >
                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-transparent absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-4xl text-center text-white transition-colors duration-300 ease-in-out group-hover:text-white">
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
