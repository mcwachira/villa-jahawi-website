import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsPeopleFill } from "react-icons/bs";
import { Container } from "../Container";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useTheme } from "next-themes";

import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({
  weight: "700",
  subsets: ["latin"],
});

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
            <div className="flex flex-col">
              <h2 className="relative text-4xl text-center overflow-visible w-auto mt-0 mr-auto mb-6 pr-2 justify-start items-start text-gray-500 capitalize font-semibold  ">
                {" "}
                {room?.title}
              </h2>

              <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-[#4a576E] text-6xl text-center capitalize font-semibold  ">
                {room?.subTitle}
              </h2>

              <p className="text-2xl text-center my-4">{room?.description}</p>

              <div className="flex my-14 ">
                <div className="flex items-center">
                  <BsPeopleFill size={60} color="#4a576E" />
                  <p className="ml-2 text-2xl  font-medium text-gray-700">
                    {room?.numberOfPeople} people
                  </p>
                </div>
              </div>

              <div
                className="w-full  sm:w-2/3 my-16 flex justify-between items-center space-x-12
      "
              >
                <Link
                  href={`/accommodation/[id]`}
                  as={`/accommodation/${room.id}`}
                  aria-label="Single Project"
                  passHref
                  class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                >
                  <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Explore
                  </span>
                </Link>

                <Link
                  href="#"
                  class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                >
                  <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Inquire
                  </span>
                </Link>

                <Link
                  href="#"
                  class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                >
                  <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Book{" "}
                  </span>
                </Link>
              </div>
            </div>
          </Container>
        </div>

        {/* <div className="relative  mx:auto my-auto md:w-full order-first md:order-last ">
          <Image
            src={room?.image}
            loading="lazy"
            alt="room image"
            className="relative z-10 shadow-lg object-cover rounded-lg"
            width="916"
            height="817"
          />
        </div> */}
      </div>
    </motion.div>
  );
};

export default RoomFeatures;
