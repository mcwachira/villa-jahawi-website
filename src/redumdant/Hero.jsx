import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'

import { Dancing_Script } from 'next/font/google'
import VideoThumb from '/public/assets/images/modal-video-thumb.jpg'

import ModalVideo from '@/components/ModalVideo/ModalVideo'
import Button from '@/components/Button/Button'
import { useTheme } from 'next-themes'
import { Container } from '../components/Container'
const dancingScript = Dancing_Script({
  weight: '700',
  subsets: ['latin'] })

const Hero = () => {

  const {theme, setTheme} = useTheme();  


    return (
        <section className={clsx("relative overflow-hidden py-20 lg:py-24",
        theme==='dark'? 'bg-[#1D1E30]': 'bg-white')}>
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
    
    

<Container className="relative z-10 grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center lg:items-start">
          <h1 className={`${dancingScript.className} text-center font-display text-5xl font-semibold text-[#7c6a467] sm:text-6xl lg:text-left`}>
          Villa Jahawi
          </h1>
       
<h2 className=" w-auto my-12 mr-auto mb-0 pr-2 justify-start items-start text-6xl text-left capitalize font-semibold  ">
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
        <div className="mx-auto w-full  lg:mr-0">
          <div className="aspect-h-6 aspect-w-8 relative rounded-sm bg-slate-50">
            <Image
              className=" rounded-sm object-cover object-center"
              src="/assets/images/banner-2.png"
              alt=""
              sizes="(min-width: 552px) 32rem, calc(100vw - 40px)"
              // width={600}
              // height={500}
             fill
              priority
            />
     
  
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero


