import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsPeopleFill } from "react-icons/bs";
import { Container } from "../Container";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import Modal from "../Modal";

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
import * as Yup from "yup";

import { Formik, Form } from "formik";

import "react-datepicker/dist/react-datepicker.css";
import FormikControl from "../FormComponents/FormikControl";

const RoomFeatures = ({ room }) => {
  const { theme, setTheme } = useTheme();

  const [showModal, setShowModal] = useState(false);
  // console.log(room);
  const childrenOptions = [
    { key: "one", value: 1 },
    { key: "two", value: 2 },
    { key: "three", value: 3 },
    { key: "four", value: 4 },
    { key: "five", value: 5 },
  ];
  const adultOptions = [
    { key: "one", value: 1 },
    { key: "two", value: 2 },
    { key: "three", value: 3 },
    { key: "four", value: 4 },
    { key: "five", value: 5 },
  ];

  const roomTypeOptions = [
    { key: "one", value: "One Bed" },
    { key: "two", value: "Two Bed" },
    { key: "three", value: "Three Bed" },
    { key: "four", value: "Four Bed" },
  ];

  const nightsOptions = [
    { key: "one", value: 1 },
    { key: "two", value: 2 },
    { key: "three", value: 3 },
    { key: "four", value: 4 },
    { key: "five", value: 5 },
  ];
  const initialValues = {
    email: "",
    name: "",
    phoneNumber: "",
    roomType: "one",
    bookingDate: null,
    nights: "one",
    adults: "one",
    children: "one",
    message: "",
  };

  const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);
  console.log(submitted);

  // const [startDate, setStartDate] = useState(new Date());

  const validationSchema = Yup.object().shape({
    name: Yup.string().max(255).required("You must Enter your Name"),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    phoneNumber: Yup.string()
      .max(20)
      .required(
        "Your mobile phone number must begin with a '+', followed by your country code then actual number e.g +254123456789"
      ),
    bookingDate: Yup.date().required("Required").nullable(),
    nights: Yup.string().required("Required"),
    adults: Yup.string().required("Required"),
    children: Yup.string().required("Required"),
    message: Yup.string().trim().required("Message is required"),
  });

  const onSubmit = (values) => {
    setMessage("Form submitted");
    setSubmitted(true);
    alert(JSON.stringify(values, null, 2));
    setShowModal(!showModal);
  };

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
                className="w-full  md:w-2/3 my-8 flex flex-col justify-between items-center md:space-x-12
    "
              >
                <div className="flex justify-between items-center space-x-12 my-8">
                  <Link
                    href={`/accommodation/[id]`}
                    as={`/accommodation/${room.id}`}
                    aria-label="Single Project"
                    passHref
                    class="relative rounded-md  inline-flex items-center justify-start py-4 px-8 text-3xl border-4 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                  >
                    <span class="w-52 h-52 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-36 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Virtual Tour
                    </span>
                  </Link>

                  <button
                    onClick={() => setShowModal(true)}
                    class="relative rounded-md  inline-flex items-center justify-start py-4 px-8 text-3xl border-4 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                  >
                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Enquire
                    </span>
                  </button>
                </div>

                {showModal ? (
                  <>
                    <div className="flex justify-center items-center overflow-x-hidden w-full h-full fixed inset-0 z-50 top-0 right-0 left-0 bottom-0 bg-black opacity-90 outline-none focus:outline-none">
                      <div className="relative h-52  w-full my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                            <h3 className="text-4xl text-center font-semibold">
                              Enquire Now
                            </h3>
                            <button
                              className="bg-transparent border-0 text-black float-right"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="text-black opacity-7 h-12 w-12 text-4xl block bg-gray-400 py-0 rounded-full">
                                x
                              </span>
                            </button>
                          </div>
                          <div className="relative p-6 flex-auto">
                            <div className="w-full">
                              <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                                validationSchema={validationSchema}
                              >
                                {(formik) => {
                                  return (
                                    <Form>
                                      <FormikControl
                                        control="input"
                                        type="name"
                                        label="Name"
                                        name="name"
                                      />
                                      <FormikControl
                                        control="input"
                                        type="email"
                                        label="Email"
                                        name="email"
                                      />

                                      <FormikControl
                                        control="input"
                                        type="phoneNumber"
                                        label="Phone Number"
                                        name="phoneNumber"
                                      />
                                      <div className="flex space-x-4 justify-between items-center">
                                        <FormikControl
                                          control="select"
                                          type="adults"
                                          label="Adults"
                                          name="adults"
                                          options={adultOptions}
                                        />
                                        <FormikControl
                                          control="select"
                                          type="children"
                                          label="Children"
                                          name="children"
                                          options={childrenOptions}
                                        />

                                        <FormikControl
                                          control="select"
                                          type="roomType"
                                          label="RoomType"
                                          name="roomType"
                                          options={roomTypeOptions}
                                        />
                                      </div>
                                      <div className="my-12 w-full">
                                        <FormikControl
                                          control="date"
                                          label="Check In Date"
                                          name="bookingDate"
                                          options={roomTypeOptions}
                                        />
                                      </div>

                                      <FormikControl
                                        control="select"
                                        type="nights"
                                        label="Number of Nights"
                                        name="nights"
                                        options={nightsOptions}
                                      />
                                      <FormikControl
                                        control="textarea"
                                        type="message"
                                        label="Message"
                                        name="message"
                                      />

                                      <div className="flex items-center space-x-4 justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                          className="text-[#041413] background-transparent font-bold uppercase px-8 py-6 text-xl outline-none focus:outline-none mr-1 mb-1"
                                          type="button"
                                          onClick={() => setShowModal(false)}
                                        >
                                          Close
                                        </button>
                                        <button
                                          className={clsx(
                                            "w-1/2 p-3 text-black transition border rounded border-primary  hover:bg-opacity-90",
                                            theme === "dark"
                                              ? "bg-[#041434] text-white"
                                              : "bg-[#F3F4F6] text-black"
                                          )}
                                          type="submit"
                                          disabled={
                                            !formik.isValid &&
                                            !formik.isSubmitting &&
                                            !formik.dirty
                                          }
                                          // onClick={() => setShowModal(false)}
                                        >
                                          Submit
                                        </button>
                                      </div>
                                    </Form>
                                  );
                                }}
                              </Formik>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}

                <Link
                  href="#"
                  class="w-3/4 relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-4xl border-4 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                >
                  <span class="w-full h-52 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-5 ml-5 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span class="relative w-full text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white">
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

        <div className="mt-12 max-w-full">
          <h2 className="relative text-center  mb-0   text-[#4a576E] text-6xl capitalize font-semibold  ">
            Amenities
          </h2>
          {room.amenities.map((amenities, index) => (
            <div
              key={index}
              className="my-4 flex flex-row items-center justify-between"
            >
              <Container>
                <span className=" text-3xl border-4  border-[#4a576e] ">
                  {amenities}
                </span>
              </Container>
            </div>
          ))}
        </div>
      </div>

      <Container>
        <div className="flex flex-col items-center s">
          <h2 className="relative text-4xl text-center  mb-6   text-gray-500 capitalize font-semibold  ">
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
