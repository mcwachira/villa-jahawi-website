import React, { useState } from "react";
import * as Yup from "yup";

import { Formik, Form } from "formik";

import "react-datepicker/dist/react-datepicker.css";
import FormikControl from "../FormComponents/FormikControl";
const BookingForm = () => {
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
    subject: Yup.string().max(255).required("You must Enter the subject "),
    bookingDate: Yup.date().required("Required").nullable(),
    nights: Yup.string().required("Required"),
    adults: Yup.string().required("Required"),
    children: Yup.string().required("Required"),
    message: Yup.string().trim().required("Message is required"),
  });

  const onSubmit = async (values) => {
    setMessage("Form submitted");
    setSubmitted(true);
    console.log(values);

    const {
      email,
      name,
      subject,
      phoneNumber,
      roomType,
      bookingDate,
      nights,
      adults,
      children,
      message,
    } = values;
    const res = await fetch("/api/SendBookingMail", {
      body: JSON.stringify({
        email,
        name,
        phoneNumber,
        subject,
        roomType,
        bookingDate: bookingDate.split("T", 1)[0],
        nights,
        adults,
        children,
        message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    setShowModal(!showModal);
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden w-full h-full fixed inset-0 z-50 top-0 right-0 left-0 bottom-0 bg-black  outline-none focus:outline-none">
            <div className="relative h-52  w-full my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-between p-5 border-b border-4 text-center border-solid border-gray-300 rounded-t ">
                  <h3 className="text-4xl !text-center font-semibold">
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
                            <FormikControl
                              control="input"
                              type="subject"
                              label="Subject"
                              name="subject"
                            />
                            <div className="flex flex-col lg:flex-row space-x-4 justify-between items-center">
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
    </>
  );
};

export default BookingForm;
