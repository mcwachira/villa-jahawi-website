import React from "react";
import Container from "./container/Container";
import { FaWifi, FaParking } from "react-icons/fa";
import { FaPersonSwimming } from "react-icons/fa6";
import { MdLocalLaundryService } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { TbMassage } from "react-icons/tb";
import { clsx } from "clsx";
import { useTheme } from "next-themes";

const Facilities = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={clsx(
        "  border-b  border-slate-200/80 w-full",
        theme === "dark" ? "bg-[#041434]" : "bg-[#FFFFFF]"
      )}
    >
      <Container>
        <h2 className="text-center text-6xl py-24">Our Facilities</h2>

        <p className="text-center text-2xl">
          We offer modern villa facilities for your comfort
        </p>
        <div className="py-2 grid aut-cols-max auto-rows-max justify-center md:grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 my-12 ">
          <div
            className={clsx(
              "flex flex-col items-center justify-center   px-16 py-16",
              theme === "dark" ? " bg-[#fafafa]" : "bg-[#e5dada]"
            )}
          >
            <FaPersonSwimming size={60} color="#4a576E" />

            <h2 className="text-2xl text-[#4a576E] my-4 leading-1">
              Swimming Pool
            </h2>
          </div>

          <div
            className={clsx(
              "flex flex-col items-center justify-center   px-16 py-16",
              theme === "dark" ? " bg-[#fafafa]" : "bg-[#e5dada]"
            )}
          >
            <FaWifi size={60} color="#4a576E" />

            <h2 className="text-2xl text-[#4a576E] my-4 leading-1">Wifi</h2>
          </div>

          <div
            className={clsx(
              "flex flex-col items-center justify-center   px-16 py-16",
              theme === "dark" ? " bg-[#fafafa]" : "bg-[#e5dada]"
            )}
          >
            <FaParking size={60} color="#4a576E" />

            <h2 className="text-2xl text-[#4a576E] my-4 leading-1">Parking</h2>
          </div>
        </div>

        <div className="py-2 grid aut-cols-max auto-rows-max justify-center  md:grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 my-12 ">
          <div
            className={clsx(
              "flex flex-col items-center justify-center   px-16 py-16",
              theme === "dark" ? " bg-[#fafafa]" : "bg-[#e5dada]"
            )}
          >
            <MdLocalLaundryService size={60} color="#4a576E" />

            <h2 className="text-2xl text-[#4a576E] my-4 leading-1">Laundry</h2>
          </div>

          <div
            className={clsx(
              "flex flex-col items-center justify-center   px-16 py-16",
              theme === "dark" ? " bg-[#fafafa]" : "bg-[#e5dada]"
            )}
          >
            <HiLightBulb size={60} color="#4a576E" />

            <h2 className="text-2xl text-[#4a576E] my-4 leading-1">
              24/7 Light
            </h2>
          </div>

          <div
            className={clsx(
              "flex flex-col items-center justify-center   px-16 py-16",
              theme === "dark" ? " bg-[#fafafa]" : "bg-[#e5dada]"
            )}
          >
            <TbMassage size={60} color="#4a576E" />

            <h2 className="text-2xl text-[#4a576E] my-4 leading-1">
              Massage & Spa
            </h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Facilities;
