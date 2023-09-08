"use client"
import Link from 'next/link'
import Image from 'next/image'
import Container from '../container/Container'
import { Dancing_Script } from 'next/font/google'
import VideoThumb from '/public/assets/images/modal-video-thumb.jpg'

import ModalVideo from '../ModalVideo/ModalVideo'
import Button from '../Button/Button'
const dancingScript = Dancing_Script({
  weight: '700',
  subsets: ['latin'] })

const HeroTwo = () => {
    return (
        <section className="relative overflow-hidden py-20 lg:py-24">
          {/* Light blue gradient background */}
          <svg
            width={1728}
            height={894}
            viewBox="0 0 1728 894"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-x-0 top-56 w-auto lg:inset-y-0"
          >
            <g clipPath="url(#clip0_8_95)">
              <g opacity="0.6" filter="url(#filter0_f_8_95)">
                <path
                  d="M201.4 582.997H330V342.155L23 501.52L201.4 582.997Z"
                  fill="#60A5FA"
                  fillOpacity="0.45"
                />
                <path
                  d="M330 342.155V284H90H-70L23 501.52L330 342.155Z"
                  fill="#7DD3FC"
                  fillOpacity="0.8"
                />
                <path
                  d="M-70 582.997H201.4L23 501.52L-70 284V582.997Z"
                  fill="#F0FDFA"
                  fillOpacity="0.5"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_8_95"
                x={-370}
                y={-16}
                width={1000}
                height="898.997"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation={150}
                  result="effect1_foregroundBlur_8_95"
                />
              </filter>
              <clipPath id="clip0_8_95">
                <rect width={1728} height={894} fill="white" />
              </clipPath>
            </defs>
          </svg>
    
          {/* <Container className="relative z-10 grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto flex max-w-2xl flex-col items-center lg:items-start">
              <h1 className="text-center font-display text-5xl font-semibold text-slate-900 sm:text-6xl lg:text-left">
                <span className="relative whitespace-nowrap">
                 

                
                  <span className={`${dancingScript.className} relative overflow-visible w-auto mt-0 mr-auto mb-4 pr-2 justify-start items-start text-[#7C6A46] text-5xl text-left capitalize font-semibold  `}>


                  Villa Jahawi

                  </span>
               
 
                </span>{' '}
                Villa for every moment rich in emotion
              </h1>

              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:justify-start">
            <Button href="#" className="h-11 px-4 py-4 bg-[#7C6A46] ">
              Book now
            </Button>

            <div className="flex gap-3 sm:gap-4">
            <ModalVideo
  thumb={VideoThumb}
  thumbWidth={768}
  thumbHeight={432}
  thumbAlt="Modal video thumbnail"
  video="/assets/images/video.mp4"
  videoWidth={1920}
  videoHeight={1080} />
            </div>


          </div>
  
            <div className="mx-auto w-full max-w-lg lg:mr-0">
              <div className="aspect-h-5 aspect-w-4 relative rounded-2xl bg-slate-50">
                <Image
                  className="h-full w-full rounded-2xl object-cover object-center"
                  src="/assets/images/gallery-2.png"
                  alt=""
                  sizes="(min-width: 552px) 32rem, calc(100vw - 40px)"
                  fill
                  priority
                />
            
       
              </div>
            </div>
          </Container>
        </section>
      )
    }
     */}

<Container className="relative z-10 grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center lg:items-start">
          <h1 className={`${dancingScript.className} text-center font-display text-5xl font-semibold text-[#7c6a467] sm:text-6xl lg:text-left`}>
          Villa Jahawi
          </h1>
       
<h2 className=" w-auto my-12 mr-auto mb-0 pr-2 justify-start items-start text-black text-6xl text-left capitalize font-semibold  ">
Villa for every moment rich in emotion

</h2>

<p className='text-2xl my-8'>
Every Moment feels like the first time Villa Jahawi
</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:justify-start">
            <Button href="#" className="h-15 bg-[#7c6a46]">
              Book now
            </Button>

            <div className="flex gap-3 sm:gap-4">
              {/* <SocialLink
                href="https://dribbble.com"
                aria-label="Follow on Dribbble"
                icon={DribbbleIcon}
              />

              <SocialLink
                href="https://instagram.com"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              />
              <SocialLink
                href="https://twitter.com"
                aria-label="Follow on Twitter"
                icon={TwitterIcon}
              /> */}


<ModalVideo
  thumb={VideoThumb}
  thumbWidth={768}
  thumbHeight={432}
  thumbAlt="Modal video thumbnail"
  video="/assets/images/video.mp4"
  videoWidth={1920}
  videoHeight={1080} />
  
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-lg lg:mr-0">
          <div className="aspect-h-5 aspect-w-4 relative rounded-2xl bg-slate-50">
            <Image
              className="h-full w-full rounded-2xl object-cover object-center"
              src="/assets/images/gallery-2.png"
              alt=""
              sizes="(min-width: 552px) 32rem, calc(100vw - 40px)"
              fill
              priority
            />
            <div>
              {/* <div className="absolute hidden w-max md:left-full md:top-16 md:block lg:-left-28 lg:-top-8 2xl:left-full 2xl:top-16 ">
                <span className="inline-block transform font-writing text-2xl tracking-wide text-slate-600 md:rotate-[16deg] lg:translate-x-6 lg:rotate-[-18deg] 2xl:rotate-12">
                  Hi, I'm Jane!
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="103"
                  height="102"
                  viewBox="0 0 103 102"
                  fill="none"
                  className="h-auto w-28 text-slate-600 md:-translate-x-1/2 md:-translate-y-6 md:rotate-0 lg:-translate-y-3 lg:translate-x-3/4 lg:rotate-12 lg:-scale-x-100 2xl:-translate-x-1/2 2xl:-translate-y-6 2xl:rotate-0 2xl:scale-x-100"
                >
                  <g>
                    <path
                      d="M100.676 26.5417C93.9574 46.1137 83.3723 65.5204 62.3048 74.1115C51.0557 78.6989 36.7215 76.3709 36.7673 62.5332C36.7985 53.1087 42.243 38.3844 53.849 37.3949C66.6654 36.3021 46.8111 57.0334 44.2548 58.8791C32.2897 67.5184 20.2216 71.4112 5.76428 74.151C0.348605 75.1774 3.24474 76.5966 6.85897 77.2296C9.99484 77.7788 13.5771 78.3248 16.755 78.0657C17.7243 77.9867 11.502 77.2793 10.5148 77.213C6.28171 76.9284 1.40658 76.4418 2.9682 71.2948C3.21916 70.4678 6.25335 62.9691 7.53037 63.112C8.19484 63.1864 9.21134 68.8129 9.5344 69.5548C11.6329 74.3731 14.1134 76.5032 19.3253 77.6737"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </div> */}
              {/* <div className="absolute -top-6 right-12 inline-flex h-12 w-max items-center justify-center gap-3.5 rounded-2xl bg-white/90 px-8 text-sm font-semibold text-slate-700 shadow-lg shadow-sky-100/50 ring-1 ring-slate-900/5 backdrop-blur-md md:-left-28 md:top-14 lg:-top-6 lg:left-44 lg:px-10 2xl:-left-48 2xl:top-14">
                <Image src={figma} alt="" className="h-auto w-4" priority />4
                years of experience
              </div> */}
              {/* <div className="absolute left-12 top-full inline-flex h-12 w-max -translate-y-6 items-center justify-center gap-3.5 rounded-2xl bg-white/90 px-8 text-sm font-semibold text-slate-700 shadow-lg shadow-sky-100/50 ring-1 ring-slate-900/5 backdrop-blur-md md:left-0 md:-translate-x-20 md:-translate-y-24 lg:-left-3 lg:-translate-y-24 lg:px-10 xl:-left-6 xl:-translate-x-28 xl:-translate-y-32">
                <Image src={sketch} alt="" className="h-6 w-auto" priority />5
                years of experience
              </div> */}
              {/* <div className="absolute top-[350px] hidden h-12 w-max items-center justify-center gap-3.5 rounded-2xl bg-white/90 px-8 text-sm font-semibold text-slate-700 shadow-lg shadow-sky-100/50 ring-1 ring-slate-900/5 backdrop-blur-md md:left-full md:inline-flex md:-translate-x-32 lg:left-48 lg:hidden lg:px-10 2xl:left-full 2xl:inline-flex 2xl:-translate-x-28">
                <Image src={tailwind} alt="" className="h-auto w-7" priority />
                <span className="">3 years of experience</span>
              </div> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroTwo


