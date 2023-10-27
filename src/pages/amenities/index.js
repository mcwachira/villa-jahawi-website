import React from "react";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import { Container } from "../../components/Container";
import clsx from "clsx";
import "../../styles/swiper-styles.module.css";
const dancingScript = Dancing_Script({
  weight: "700",
  subsets: ["latin"],
});

// Import Swiper
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useTheme } from "next-themes";

const Amenities = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={clsx(
        "h-full",
        theme === "dark" ? "bg-[#041434]" : "bg-[#F3F4F6]"
      )}
    >
      <section className="relative bg-[url(/assets/images/jahawi-images/front-2.jpg)] bg-cover bg-center bg-no-repeat">
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

      <Container>
        {/* main area  */}
        <div className="mt-20 space-y-6">
          <h3 className="relative text-4xl text-center overflow-visible w-auto mt-0 mr-auto mb-6 pr-2 justify-start items-start text-gray-500 capitalize font-semibold  ">
            {" "}
            Amenities
          </h3>

          <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-[#4a576E] text-6xl text-center capitalize font-semibold  ">
            Making Your Stay Comfortable & Care Free
          </h2>

          <p className="text-2xl text-center">
            At Villa Jahawi, you will find all the facilities necessary to make
            your stay as comfortable and as carefree as possible. Our team of
            staff, renowned for offering exemplary service, is there for you and
            will make every effort to ensure you have an exceptional and
            unforgettable holiday!
          </p>
        </div>
      </Container>

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
          className="mySwiper h-[64rem] w-screen "
        >
          <SwiperSlide className="  bg-[url(/assets/images/jahawi-images/drone-photos/1.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/drone-photos/2.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/drone-photos/3.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/drone-photos/4.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/drone-photos/5.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
        </Swiper>
      </div>

      {/* pool area  */}

      <div className="mt-20 space-y-6">
        <h3 className="relative text-4xl text-center overflow-visible w-auto mt-0 mr-auto mb-6 pr-2 justify-start items-start text-gray-500 capitalize font-semibold  ">
          {" "}
          SWIMMING POOL
        </h3>

        <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-[#4a576E] text-6xl text-center capitalize font-semibold  ">
          Ideal Space for Relaxation
        </h2>

        <p className="text-2xl text-center">
          The main leisure pool offers the ideal space for sunbathing,
          relaxation and leisure.
        </p>
      </div>

      <div className=" mt-20 mb-20">
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
          className="mySwiper h-[64rem] w-screen  "
        >
          <SwiperSlide className="  bg-[url(/assets/images/jahawi-images/drone-photos/5.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/drone-photos/pool-2.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/drone-photos/pool-3.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/drone-photos/cool-pool.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
        </Swiper>
      </div>

      {/* Kitchen area  */}
      <div className="mt-20 space-y-6">
        <h3 className="relative text-4xl text-center overflow-visible w-auto mt-0 mr-auto mb-6 pr-2 justify-start items-start text-gray-500 capitalize font-semibold  ">
          {" "}
          Kitchen
        </h3>

        <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-[#4a576E] text-6xl text-center capitalize font-semibold  ">
          Ideal Space for Cooking and preparing your meals
        </h2>

        <p className="text-2xl text-center">
          The villa's kitchen is a home away from home, allowing guests to take
          control of their dining experience and prepare their meals to their
          liking.
        </p>
      </div>

      <div className=" mt-20 mb-20">
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
          className="mySwiper h-[64rem] w-screen  "
        >
          <SwiperSlide className="  bg-[url(/assets/images/jahawi-images/kitchen/kitchen-1.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/kitchen/kitchen-2.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/kitchen/kitchen-3.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/kitchen/kitchen-4.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/kitchen/kitchen-5.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
        </Swiper>
      </div>

      {/* sitting area  */}
      <div className="mt-20 space-y-6">
        <h3 className="relative text-4xl text-center overflow-visible w-auto mt-0 mr-auto mb-6 pr-2 justify-start items-start text-gray-500 capitalize font-semibold  ">
          {" "}
          Lounge
        </h3>

        <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-[#4a576E] text-6xl text-center capitalize font-semibold  ">
          Ideal Space for relaxing
        </h2>

        <p className="text-2xl text-center">
          Whether you want to kick back and watch a movie or simply unwind, our
          villa's lounge is the perfect retreat for relaxation and
          entertainment.
        </p>
      </div>

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
          className="mySwiper h-[64rem] w-screen  "
        >
          <SwiperSlide className="  bg-[url(/assets/images/jahawi-images/sitting/sitting-1.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/sitting/sitting-2.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/sitting/sitting-3.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/sitting/sitting-4.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/sitting/sitting-5.jpg)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Amenities;
