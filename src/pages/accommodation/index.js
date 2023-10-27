import React from "react";
import Image from "next/image";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";

import Link from "next/link";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";

import { accommodationData } from "../../data/accommodationData";
import SingleAccommodation from "../../components/SingleAccommodation";
import clsx from "clsx";
import { useTheme } from "next-themes";
import Container from "../../components/container/Container";

const Rooms = ({ rooms }) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className={clsx(theme === "dark" ? "bg-[#041434]" : "bg-white")}>
      <section className="mb-40">
        {/* <!-- Jumbotron --> */}
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat"
          style={{
            backgroundPosition: "50%",
            backgroundImage: " url('/assets/images/jahawi-images/room-2.jpg')",
            height: "850px",
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.25)] bg-fixed">
            <div className="flex flex-col md:flex-row w-full items-center justify-end  md:w-2/3 h-full md:items-end md:justify-start text-white">
              <div className="mb-2 justify-end md:mb-28 mx-14  text-left font-bold tracking-tight flex flex-col sm:1/2 md:w-1/2">
                <span className="text-3xl my-4">
                  Designed to take advantage of
                </span>

                <div className="w-full flex justify-between items-center">
                  <span className="text-6xl xl:text-7xl">
                    The sunny costal climate
                  </span>
                </div>
              </div>
              <div className="px-6 text-center  mb-12 md:mb-24 ml-auto text-white md:px-12">
                <button
                  href="#section1"
                  scroll={false}
                  className="bg-white opacity-60"
                >
                  <AiOutlineArrowDown size={60} color="#111" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Jumbotron --> */}
      </section>

      <Container>
        <h2 className="text-center text-6xl py-24">Our Rooms</h2>
      </Container>

      {rooms.map((room) => (
        <SingleAccommodation key={room.id} room={room} />
      ))}
    </div>
  );
};

export default Rooms;

export const getStaticProps = async () => {
  return {
    props: {
      rooms: accommodationData,
    },
  };
};
