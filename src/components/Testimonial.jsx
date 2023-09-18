import Image from 'next/image'
import { useEffect, useState } from 'react'

import avatarImage1 from '/public/assets/images/avatars/avatar-1.png'
import avatarImage2 from '/public/assets/images/avatars/avatar-2.png'
import avatarImage3 from '/public/assets/images/avatars/avatar-3.png'
import avatarImage4 from '/public/assets/images/avatars/avatar-4.png'
import avatarImage5 from '/public/assets/images/avatars/avatar-5.png'

// Import Swiper
import { Navigation } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Container from './container/Container'
import { useTheme } from 'next-themes'
import { clsx } from 'clsx'


const testimonials = [
  {
    headline: '“Highly skilled and professional”',
    content:
      'And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.',
    author: {
      name: 'Katy Jackson',
      role: 'Guest',
      image: avatarImage1,
    },
  },
  {
    headline: '“I highly recommend him”',
    content:
      'And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.',
    author: {
      name: 'Sean Murphy',
      role: 'Guest',
      image: avatarImage2,
    },
  },
  {
    headline: '“I’m so lucky I found John!”',
    content:
      'And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.',
    author: {
      name: 'Elaine Foster',
      role: 'Guest',
      image: avatarImage3,
    },
  },
  {
    headline: '“I’m really impressed with the quality of his work”',
    content:
      'And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.',
    author: {
      name: 'Jeff Bick',
      role: 'Guest',
      image: avatarImage4,
    },
  },
  {
    headline: '“Seriously awesome!”',
    content:
      'And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.',
    author: {
      name: 'Jason Cosmo',
      role: 'Guest',
      image: avatarImage5,
    },
  },
  {
    headline: '“Highly skilled and professional”',
    content:
      'And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.',
    author: {
      name: 'Katy Jackson',
      role: 'Guest',
      image: avatarImage1,
    },
  },
  {
    headline: '“I highly recommend him”',
    content:
      'And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.',
    author: {
      name: 'Sean Murphy',
      role: 'Guest',
      image: avatarImage2,
    },
  },
  {
    headline: '“I’m so lucky I found John!”',
    content:
      'And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.',
    author: {
      name: 'Elaine Foster',
      role: 'Guest',
      image: avatarImage3,
    },
  },
  {
    headline: '“I’m really impressed with the quality of his work”',
    content:
      'And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.',
    author: {
      name: 'Jeff Bick',
      role: 'Guest',
      image: avatarImage4,
    },
  },
  {
    headline: '“Seriously awesome!”',
    content:
      'And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.',
    author: {
      name: 'Jason Cosmo',
      role: 'Guest',
      image: avatarImage5,
    },
  },
]



const Testimonial = () => {

  let testimonialsCount = parseFloat(testimonials.length)

  let [swiperIndex, setSwiperIndex] = useState(1)

  let [carouselProgress, setCarouselProgress] = useState(15)

  const {theme, setTheme} = useTheme();

  useEffect(() => {

    let screenWidth = window.innerWidth
    if(screenWidth >= 1138){
      setCarouselProgress(((swiperIndex + 3) / testimonialsCount) * 100)
    }
  }, [swiperIndex,testimonialsCount])


  return (
    <section className={clsx("relative overflow-hidden 0 py-20 sm:py-24 lg:pt-32 ",theme==='dark'? 'bg-[#1D1E30]': 'bg-white')}>
      <Container className="relative">
        <div className="mx-auto grid max-w-xl gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
              Here’s what past Guests are saying about our villa
            </h2>
            <div className="mt-10 hidden h-[10px] w-full rounded-full bg-gray-300 lg:mt-16 lg:block">
              <div
                className="h-full rounded-full bg-gray-500 duration-200"
                style={{ width: `${carouselProgress}%` }}
              ></div>
            </div>
          </div>
          <div className="lg:ml-auto lg:max-w-sm">
            <p className="text-lg text-slate-700">
              Iced pumpkin ristretto irish trifecta robusta trade froth affogato
              barista con barista cappuccino filter roast.
            </p>
            <div className="mt-14 flex gap-2.5 lg:mt-12">
              <button className="carousel-prev inline-flex h-12 w-12 items-center justify-center rounded-full text-black bg-white shadow-sm shadow-sky-200/75 ring-1 ring-slate-200/60 duration-200 hover:bg-sky-50/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 text-sky-700/70"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="carousel-next inline-flex h-12 w-12 items-center justify-center rounded-full  text-black bg-white shadow-sm shadow-sky-200/75 ring-1 ring-slate-200/60 duration-200 hover:bg-sky-50/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 text-sky-700/70"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div className="relative mt-8 lg:mt-24">
        <Container className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{ nextEl: '.carousel-next', prevEl: '.carousel-prev' }}
            scrollbar={{ draggable: true }}
            spaceBetween={0}
            slidesPerView="auto"
            grabCursor={true}
            loop={false}
            centeredSlides={false}
            initialSlide={0}
            onSlideChange={(swiper) => setSwiperIndex(swiper.activeIndex)}
            className="!overflow-visible"
          >
            <div className="flex w-full">
              {testimonials.map((testimonial, testimonialIndex) => (
                <SwiperSlide
                  key={`testimonial-${testimonialIndex}`}
                  className="swiper-slide !h-auto !w-auto shrink-0 border-b border-l border-t border-slate-200 p-10 shadow-sm shadow-sky-100/50 first:rounded-l-2xl last:rounded-r-2xl last:border-r"
                >
                  <div className="flex h-full w-full max-w-[272px] flex-1 flex-col">
                    <div className="flex-1">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((i, n) => (
                          <svg
                            key={`testimonial-${testimonialIndex}-star-${n}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-red-700"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                      <h4 className="mt-7 font-display text-3xl font-medium text-slate-900">
                        {testimonial.headline}
                      </h4>
                      <p className="mt-3 text-xl leading-7 text-slate-700">
                        {testimonial.content}
                      </p>
                    </div>
                    <div>
                      <hr className="my-6 h-px w-full bg-slate-200" />
                      <div className="flex items-center justify-between">
                        <div className="">
                          <p className="font-display text-lg font-medium text-slate-900">
                            {testimonial.author.name}
                          </p>
                          <p className="mt-1.5 text-md text-slate-600">
                            {testimonial.author.role}
                          </p>
                        </div>
                        <Image
                          src={testimonial.author.image}
                          alt={testimonial.author.name}
                          className="h-14 w-14 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </Container>
        </div>

        </section>
  )
}

export default Testimonial