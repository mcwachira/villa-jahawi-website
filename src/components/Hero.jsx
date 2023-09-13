import Link from 'next/link'
import React from 'react'
import { Dancing_Script } from 'next/font/google'
const dancingScript = Dancing_Script({
  weight: '700',
  subsets: ['latin'] })
const Hero = () => {
  return (


<section
  className="relative bg-[url(/assets/images/banner-1.png)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl  px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-lg text-center ltr:sm:text-left rtl:sm:text-right">
    <h1 className={`${dancingScript.className}
     text-center font-display text-5xl font-semibold text-[#7c6a467]
      sm:text-6xl lg:text-left my-12 text-white`}>
          Villa Jahawi
          </h1>
      <h2 className=" my-4 text-3xl font-extrabold sm:text-5xl  lg:text-left text-white">
      Every Moment feels like the first time 
{/* 
        <strong className="block font-extrabold text-rose-700">
        Villa Jahawi.
        </strong> */}
      </h2>

      {/* <p className="mt-4 max-w-lg sm:text-xl/relaxed">
      Every Moment feels like the first time Villa Jahawi
      </p> */}

      <div className="mt-8 flex flex-wrap gap-4 text-center">
  

        <Link
          href="#"
          className="block w-full rounded bg-[#7c6a46] my-8 px-12 py-3 text-xl font-medium text-white shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
Book Now
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero