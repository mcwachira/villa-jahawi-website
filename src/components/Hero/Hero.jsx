import React from 'react'
import ModalVideo from '../ModalVideo/ModalVideo'
import Container from '../container/Container'
import { Dancing_Script } from 'next/font/google'
import VideoThumb from '/public/assets/images/modal-video-thumb.jpg'


import Image from "next/image"
import Link from 'next/link'

const dancingScript = Dancing_Script({
  weight: '700',
  subsets: ['latin'] })


const Hero = () => {
  return (
 <>
 

<Container>

</Container>
 <div className="py-28 w-screen grid  md:grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-2 bg-white ">

                                <div className='mt-20 ml-auto mr-auto w-1/2'>
                                    <div className='flex flex-col'>
                                    
                                 
                                            <div className={dancingScript.className}>
                                            <h1 className="relative overflow-visible w-auto
                                             mt-0 mr-auto mb-4 pr-2 justify-start items-start text-[#7C6A46]
                                              text-5xl text-left capitalize font-semibold  ">Villa Jahawi</h1>
                                             
                                            </div>

<div>


<h2 className=" w-auto mt-4 mr-auto mb-0 pr-2 justify-start items-start text-black text-6xl text-left capitalize font-base  ">
Villa for every moment rich in emotion

</h2>

<p className='text-2xl my-8'>
Every Moment feels like the first time Villa Jahawi
</p>

{/* <div className="flex justify-around items-center my-10"> */}

{/* <Link
                  href="/hire"
                  className="ease-in-up  rounded-full bg-[#7c6a46] py-4 px-8 text-xl font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                >
               Book now
                </Link> */}

<div>
  
</div>
                <ModalVideo
  thumb={VideoThumb}
  thumbWidth={768}
  thumbHeight={432}
  thumbAlt="Modal video thumbnail"
  video="/assets/images/video.mp4"
  videoWidth={1920}
  videoHeight={1080} />
  


</div>
{/* </div> */}
                        
                                          
                        



                                 
                                </div>
                                </div>
                                <div className='flex flex-col mr-auto ml-auto'>

                                    <div className="relative mr-0">
                                        <Image
                                            src="/assets/images/gallery-2.png"
                                            className="relative z-10 shadow-lg object-cover "
                                            width="516" height="517"
                                            alt="property image"
                                            />

                                    </div>




                                </div>

                                </div>





 
 </>
  )
}

export default Hero