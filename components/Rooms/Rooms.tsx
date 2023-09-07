"use client"

import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' 
import Image from 'next/image'
import {MdOutlineBedroomParent} from 'react-icons/md'
import {GiBathtub} from 'react-icons/gi'

const Rooms = () => {

//     <div ref={ref} className="keen-slider">
//     <div className="keen-slider__slide number-slide1">1</div>
//     <div className="keen-slider__slide number-slide2">2</div>
//     <div className="keen-slider__slide number-slide3">3</div>
//     <div className="keen-slider__slide number-slide4">4</div>
//     <div className="keen-slider__slide number-slide5">5</div>
//     <div className="keen-slider__slide number-slide6">6</div>
//   </div>

  const [currentSlide, setCurrentSlide] =useState<number>(0)
  const [loaded, setLoaded] = useState<false>(false)


    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        '#keen-slider',
        {
          loop: true,
            mode: "free-snap",
            initial: 0,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel)
      },
          slides: {
            origin: 'center',
            perView: 1.25,
            spacing: 16,
          },

          breakpoints: {
            '(min-width: 1024px)': {
              slides: {
                origin: 'auto',
                perView: 2.5,
                spacing: 32,
              },
            },
          },
        },
      
      )

//   const keenSlider = new KeenSlider(
//     '#keen-slider',
//     {
//       loop: true,
//       slides: {
//         origin: 'center',
//         perView: 1.25,
//         spacing: 16,
//       },
//       breakpoints: {
//         '(min-width: 1024px)': {
//           slides: {
//             origin: 'auto',
//             perView: 2.5,
//             spacing: 32,
//           },
//         },
//       },
//     },
//     []
//   )

//   const keenSliderPrevious = document.getElementById('keen-slider-previous')
//   const keenSliderNext = document.getElementById('keen-slider-next')

//   keenSliderPrevious.addEventListener('click', () => keenSlider.prev())
//   keenSliderNext.addEventListener('click', () => keenSlider.next())


const handleNext = () => {

}

const handlePrevious = () => {
    
}
  return (
    <section className="bg-gray-50">
    <div
      className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24"
    >
      <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
        <h2
          className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        >
                 Our Rooms
        </h2>
  
        <div className="mt-8 flex gap-4 lg:mt-0">
          <button
            aria-label="Previous slide"
            id="keen-slider-previous"
            className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
  
          <button
            aria-label="Next slide"
            id="keen-slider-next"
            className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            //   disabled={
            //     currentSlide ===
            //     instanceRef.current.track.details.slides.length - 1
            //   }
          >
            <svg
              className="h-5 w-5 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
  
      <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
        <div id="keen-slider" className="keen-slider">
          {/* <div className="keen-slider__slide">
            <blockquote
              className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
            >
              <div>
                <div className="flex gap-0.5 text-green-500">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
  
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
  
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
  
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
  
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
  
                <div className="mt-4">
                  <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                    Stayin' Alive
                  </p>
  
                  <p className="mt-4 leading-relaxed text-gray-700">
                    No, Rose, they are not breathing. And they have no arms or
                    legs … Where are they? You know what? If we come across
                    somebody with no arms or legs, do we bother resuscitating
                    them? I mean, what quality of life do we have there?
                  </p>
                </div>
              </div>
  
              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; Michael Scott
              </footer>
            </blockquote>
          </div> */}
  
          {/* <div className="keen-slider__slide">
            <blockquote
              className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
            >
              <div>
                <div className="flex gap-0.5 text-green-500">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
  
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
  
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
  
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
  
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
  
                <div className="mt-4">
                  <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                    Stayin' Alive
                  </p>
  
                  <p className="mt-4 leading-relaxed text-gray-700">
                    No, Rose, they are not breathing. And they have no arms or
                    legs … Where are they? You know what? If we come across
                    somebody with no arms or legs, do we bother resuscitating
                    them? I mean, what quality of life do we have there?
                  </p>
                </div>
              </div>
  
              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; Michael Scott
              </footer>
            </blockquote>
          </div>
  
          <div className="keen-slider__slide">
            <blockquote
              className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
            >
              <div>
                <div className="flex gap-0.5 text-green-500">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
  
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
  
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
  
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
  
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
  
                <div className="mt-4">
                  <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                    Stayin' Alive
                  </p>
  
                  <p className="mt-4 leading-relaxed text-gray-700">
                    No, Rose, they are not breathing. And they have no arms or
                    legs … Where are they? You know what? If we come across
                    somebody with no arms or legs, do we bother resuscitating
                    them? I mean, what quality of life do we have there?
                  </p>
                </div>
              </div>
  
              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; Michael Scott
              </footer>
            </blockquote>
          </div> */}

<div className='py-2 grid aut-cols-max auto-rows-max  md:grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-8 my-20 mb-5 '>
<div className="max-w-full w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
  <img className="w-full" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80" alt="Property Image"/>
  <div className="px-6 py-4">
    <div className="my-8">
      <h2 className="text-2xl font-bold text-gray-900">Beautiful House</h2>
      <div className="flex items-center">

      </div>
    </div>
    <div className="flex justify-between">
      <div className="flex items-center">
      <MdOutlineBedroomParent size={40} />

        <p className="ml-2 text-lg  font-medium text-gray-700">3 Bedrooms</p>
      </div>
      <div className="flex items-center">
          <GiBathtub size={40} />
        <p className="ml-2 text-lg  font-medium text-gray-700">2 Bathrooms</p>
      </div>
      
    </div>
    <div className="my-12 flex justify-between items-center">

        <button   className="ease-in-up  rounded-md bg-[#7c6a46] py-3 px-8 text-xl font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9">
            Book Now 
        </button>
        <p className="text-3xl font-extrabold text-black">$300</p>
    </div>
  </div>

</div>

<div className="max-w-full w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
  <img className="w-full" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80" alt="Property Image"/>
  <div className="px-6 py-4">
    <div className="my-8">
      <h2 className="text-2xl font-bold text-gray-900">Beautiful House</h2>
      <div className="flex items-center">

      </div>
    </div>
    <div className="flex justify-between">
      <div className="flex items-center">
          <MdOutlineBedroomParent size={40} />
        <p className="ml-2 text-lg  font-medium text-gray-700">3 Bedrooms</p>
      </div>
      <div className="flex items-center">
          <GiBathtub size={40} />
        <p className="ml-2 text-lg  font-medium text-gray-700">2 Bathrooms</p>
      </div>
      
    </div>
    <div className="my-12 flex justify-between items-center">

        <button   className="ease-in-up  rounded-md bg-[#7c6a46] py-3 px-8 text-xl font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9">
            Book Now 
        </button>
        <p className="text-3xl font-extrabold text-black">$300</p>
    </div>
  </div>

</div>
<div className="max-w-full w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
  <img className="w-full" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80" alt="Property Image"/>
  <div className="px-6 py-4">
    <div className="my-8">
      <h2 className="text-2xl font-bold text-gray-900">Beautiful House</h2>
      <div className="flex items-center">

      </div>
    </div>
    <div className="flex justify-between">
      <div className="flex items-center">
          <MdOutlineBedroomParent size={40} />
        <p className="ml-2 text-lg  font-medium text-gray-700">3 Bedrooms</p>
      </div>
      <div className="flex items-center">
          <GiBathtub size={40} />
        <p className="ml-2 text-lg  font-medium text-gray-700">2 Bathrooms</p>
      </div>
      
    </div>
    <div className="my-12 flex justify-between items-center">

        <button   className="ease-in-up  rounded-md bg-[#7c6a46] py-3 px-8 text-xl font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9">
            Book Now 
        </button>
      <p className="text-3xl font-extrabold text-black">$300</p>
    </div>
  </div>

</div>
</div>

{/* 
<div className='py-2 grid aut-cols-max auto-rows-max  md:grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-8 my-20 mb-5 '>
<div className="max-w-full w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
  <img className="w-full" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80" alt="Property Image"/>
  <div className="px-6 py-4">
    <div className="mb-2">
      <h2 className="text-2xl font-bold text-gray-900">Beautiful House</h2>
      <div className="flex items-center">

      </div>
    </div>
    <div className="flex justify-between">
      <div className="flex items-center">
        <img src="https://img.icons8.com/windows/24/null/bedroom.png" />
        <p className="ml-2 text-sm font-medium text-gray-700">3 Bedrooms</p>
      </div>
      <div className="flex items-center">
        <img src="https://img.icons8.com/pastel-glyph/24/null/bath--v2.png" />
        <p className="ml-2 text-sm font-medium text-gray-700">2 Bathrooms</p>
      </div>
      
    </div>
    <div className="mt-4">
      <p className="text-3xl font-extrabold text-blue-800">$200,000</p>
    </div>
  </div>
  <div className="px-6 py-4 flex justify-between items-center">


</div>
</div>


<div className="max-w-full w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
  <img className="w-full" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80" alt="Property Image"/>
  <div className="px-6 py-4">
    <div className="mb-2">
      <h2 className="text-2xl font-bold text-gray-900">Beautiful House</h2>
      <div className="flex items-center">

      </div>
    </div>
    <div className="flex justify-between">
      <div className="flex items-center">
        <img src="https://img.icons8.com/windows/24/null/bedroom.png" />
        <p className="ml-2 text-sm font-medium text-gray-700">3 Bedrooms</p>
      </div>
      <div className="flex items-center">
        <img src="https://img.icons8.com/pastel-glyph/24/null/bath--v2.png" />
        <p className="ml-2 text-sm font-medium text-gray-700">2 Bathrooms</p>
      </div>
      
    </div>
    <div className="mt-4">
      <p className="text-3xl font-extrabold text-blue-800">$200,000</p>
    </div>
  </div>
  <div className="px-6 py-4 flex justify-between items-center">


</div>
</div>
<div className="max-w-full w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
  <img className="w-full" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80" alt="Property Image"/>
  <div className="px-6 py-4">
    <div className="mb-2">
      <h2 className="text-2xl font-bold text-gray-900">Beautiful House</h2>
      <div className="flex items-center">

      </div>
    </div>
    <div className="flex justify-between">
      <div className="flex items-center">
        <img src="https://img.icons8.com/windows/24/null/bedroom.png" />
        <p className="ml-2 text-sm font-medium text-gray-700">3 Bedrooms</p>
      </div>
      <div className="flex items-center">
        <img src="https://img.icons8.com/pastel-glyph/24/null/bath--v2.png" />
        <p className="ml-2 text-sm font-medium text-gray-700">2 Bathrooms</p>
      </div>
      
    </div>
    <div className="mt-4">
      <p className="text-3xl font-extrabold text-blue-800">$200,000</p>
    </div>
  </div>
  <div className="px-6 py-4 flex justify-between items-center">


</div>
</div>

</div> */}
  </div>
</div>
        
   
    </div>
  </section>
  )
}

export default Rooms