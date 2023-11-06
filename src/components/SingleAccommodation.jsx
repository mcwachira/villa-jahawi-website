import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { Container } from "./Container";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";

const SingleAccommodation = ({ room }) => {
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
      <div
        className={clsx(
          "pb-20 w-full grid  items-center md:grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-2 ",
          theme === "dark" ? "bg-[#041434]" : "bg-white"
        )}
        id="#section1"
      >
        <div className="mt-20 mx-auto w-full">
          <Container>
            <div className="flex flex-col">
              <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-6 pr-2 justify-start items-start text-gray-500 text-3xl text-left capitalize font-semibold  ">
                {" "}
                {room?.title}
              </h2>

              <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-[#4a576E] text-xl lg:text-5xl text-left capitalize font-semibold  ">
                {room?.subTitle}
              </h2>

              <p className=" text-lg md:text-2xl  leading-loose my-2">
                {room?.description}
              </p>

              <div className="mt-4">
                <div className=" w-full  sm:w-2/3 my-8 flex justify-between items-center space-x-12">
                  <div className="flex items-center">
                    <BsPeopleFill size={60} color="#4a576E" />
                    <p className="ml-2 text-lg md:text-2xl  font-medium text-gray-700">
                      {room?.numberOfPeople} people
                    </p>
                  </div>

                  <div className="flex items-center">
                    <MdOutlineBedroomParent size={40} />
                    <p className="ml-3  text-lg md:text-2xl   font-medium text-gray-700">
                      {room?.numberOfBeds} Beds
                    </p>
                  </div>

                  <div className="flex items-center">
                    <GiBathtub size={40} />
                    <p className="ml-3  text-lg md:text-2xl    font-medium text-gray-700">
                      {room.numberOfBathrooms}{" "}
                      {room.numberOfBathrooms === 1 ? "Bathroom" : "Bathrooms"}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="w-full  md:w-2/3 my-8 flex flex-col justify-between items-center md:space-x-12
    "
              >
                <div className="flex justify-between items-center space-x-12 my-8">
                  <Link
                    href={`/accommodation/[id]`}
                    as={`/accommodation/${room.id}`}
                    aria-label="Single Project"
                    passHref
                    className="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-3xl border-4 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Explore
                    </span>
                  </Link>

                  <Link
                    href="#"
                    className="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-3xl border-4 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Enquire
                    </span>
                  </Link>
                </div>

                <Link
                  href="#"
                  className="w-3/4 relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-3xl border-4 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                >
                  <span className="w-full h-52 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-5 ml-5 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Book{" "}
                  </span>
                </Link>
              </div>
            </div>
          </Container>
        </div>

        <div className="relative  mx:auto my-auto md:w-full order-first lg:order-last ">
          <Image
            src={room?.image}
            loading="lazy"
            alt="room image"
            className="relative z-10 shadow-lg object-cover rounded-lg"
            width="716"
            height="517"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SingleAccommodation;
